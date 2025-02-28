import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import fetch from 'node-fetch';
import { setGlobalOptions } from 'firebase-functions/v2';
import { onUserCreated } from 'firebase-functions/v2/auth';
// import * as logger from "firebase-functions/logger"; // loggerを使用しない場合は削除
// import {onRequest} from "firebase-functions/v2/https"; // onRequestを使用しない場合は削除
admin.initializeApp();
setGlobalOptions({ region: 'asia-northeast1' });
// 環境変数にGraphQLのエンドポイントを設定
const graphqlEndpoint = functions.config().graphql.endpoint;
export const createUserInGraphQL = onUserCreated(async (event) => {
    const { uid, email, displayName } = user;
    const graphqlEndpoint = process.env.HASURA_URL;
    const hasuraAdminSecret = process.env.HASURA_KEY;
    // GraphQLミューテーションの定義
    const mutation = `
      mutation CreateUser($uid: String!, $email: String, $displayName: String) {
        insert_user_one(object: { uid: $uid, email: $email, displayName: $displayName }) {
          id
          uid
          email
          displayName
        }
      }
    `;
    // GraphQL変数
    const variables = {
        uid: uid,
        email: email || null,
        displayName: displayName || null,
    };
    try {
        // GraphQL APIへのリクエスト
        const response = await fetch(graphqlEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: mutation,
                variables: variables,
            }),
        });
        const result = await response.json();
        if (result.errors) {
            console.error('GraphQLエラー:', result.errors);
            throw new Error('GraphQLエラーが発生しました');
        }
        console.log('GraphQLにユーザーを作成:', result.data);
        return null;
    }
    catch (error) {
        console.error('GraphQL APIエラー:', error);
        return null;
    }
});
//# sourceMappingURL=index.mjs.map
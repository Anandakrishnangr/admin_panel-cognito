export const awsConfigDev = {
    "aws_project_region": "ap-south-1",
    "aws_appsync_graphqlEndpoint": "https://zka4o25gozgrpbia4pbe43hwha.appsync-api.ap-south-1.amazonaws.com/graphql",
    "aws_appsync_region": "ap-south-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_cognito_identity_pool_id": "ap-south-1:64ed47b6-53db-4262-b698-9aee30bb2d3f",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_NoPTQ4KVr",
    "aws_user_pools_web_client_id": "7r047chdhfdnabigae3l0teaok",
    "oauth": {
        "domain": "ledgerxdevelopment76736590-76736590-dev.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "aws.cognito.signin.user.admin",
            "email",
            "openid",
            "phone",
            "profile"
        ],
        "redirectSignIn": "https://beta.ledgerx365.com/",
        "redirectSignOut": "https://beta.ledgerx365.com/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};
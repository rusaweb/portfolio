module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          serviceAccount: {
            "type": "service_account",
            "project_id": "portfolio-d7a1f",
            "private_key_id": "7a489f3f1788e92dac3bb7f49b84c7d23f771d97",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCWw9VljeRsPjkZ\n9EzQzJC8e/0GAK0F2QKXIVQGDt4ff5QBt6GaIM3z0NPgGwN+JYthIg75VDT5bsXm\nLcil+kTvsWdTvO8hIuLKSt/nza5B6O1+CC7h1/lk09EdAjv8cSEXcd7NOpD7znEf\niUN/K/0b0WK8W63MRsRxISjtJnrwkv8DPIePC3ZF2C3K5cgVkfbqbz/D2y4Rr7qQ\nCWwF6HBANErwAK8ipWNctI6wkwdNIh3ZNzp336/Erv4YaML2gir0a4iOJ8KAIF7X\nRz9Gr1WKoFPWDBnCCzbziNgJdOEnd4qfM7bDiJNn7QjkZL2mQNwdYzr02BtkPaIh\njwgSsVjBAgMBAAECggEAEq4mm3vqjNfj2tmoh+mE2HnTZsJALfyOw9uLDeobLxNv\nawwN76s3YYmjKv4l32Q3AhzGdrGuk6ZcSnIrTZd2Ia3dQ+Shy30HVTHUTuQu/ncm\nMArDBlQskEfnfdzoQlXhGAbRqKOkUbLpVNM84/23EZKO1ZBVdz1gezT03Xd6XaLk\nVgpKQ2wU61+lIw7PbgEV5dDRRESlg0evGVF7U7PEbfxJKdwApD8zeDcdSFVmKzJy\nAosTc5UEa8we6nE9CTOvC96nPPiv7ITuPh79zp7MZE6JBq5+je3/8dlUNhxhHCvu\nfZLjWkcA1sU2fZVIPpucfx7RvZfzdTvzMxgNb3427QKBgQDKRSESiQNXcxuw4vnJ\n1kHKYvhCU2uOiAQSIdLGpbmfjUuuWx7GNqHxJrkAS/hC7E+EwcZgtp3gs5dQIo+V\n5VhTga7tWCsNn5/+npB5NUdduWVKhuFWEjOIzGzUI79NxZ2nR4W27grzgsCgCujr\nrSgem1w8oozgCeHwrhc03zl31QKBgQC+0DsVgiuz30oeYlzznviIzyoIOfAfaPjE\nSqpLhT0lx6dnLfvdG4c9/ZBiG7noLlR4osKK91VOwuQAYibHPVMZ+XkdBAlN9hfz\n/aBqgzpVZjetHLV2ygf3bJunm0HqSEo99tPPMx62JuNW7O07pOkh7VUQe7aRnEg+\nXxYb3gkfPQKBgQDJHAyzCimZZGiu6i5jwTUuzlJ6V8kEMTai9KBGRHaYLfuGgzDI\n8X74b4DXy7EukRjLLYNZm5jD1qxmz8Ylyp+Uf8d2UwiThhelKPEKoq+vf2s3u34G\nfxhgNqkqD9TgtdB3hwRrCqk2ztVJCy/lTAgszlnaK+CXzRupmt6WAjB4dQKBgQCq\nczqEUR6W9Dyyfa2I1pYvJ9flN1Q/yraGKiiLg78Gs53ftp0Je6DJCGvkp93fARvm\nE4ZzOtPSopennAYF7ssAJfFBsSxanx3wj7yvyP/f74qGsmGLdpe9NyCojTFJhkAD\nsCyvJ3wkvQJR0R1uLTcwXmChc9G3qwKB7NDEHgjKBQKBgQCrfnNm8xjMbRnNdSZC\nxSIdlVLXrXxk3jC9jdVeXYRV4XYzqYm8ub4iSWAL35/9+gGfuSid/NSsExOcEGsq\nOcxzOViC7BHxBghzeXapLy6ucNa2RqWdIfpqq9i8VMWB8KyY6q9UdUnwhy4Ipk/W\nQQNZZ+Obb2Sja2mUCu6Am1Qyyw==\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-k2owt@portfolio-d7a1f.iam.gserviceaccount.com",
            "client_id": "108703943601363770859",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-k2owt%40portfolio-d7a1f.iam.gserviceaccount.com"
          },
          // Custom bucket name
          bucket: env("STORAGE_BUCKET_URL"),
          sortInStorage: true, // true | false
          debug: false, // true | false
        },
      },
    },
  });
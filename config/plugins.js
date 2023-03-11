module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          serviceAccount: require("./portfolio-d7a1f-firebase-adminsdk-k2owt-7a489f3f17.json"),
          // Custom bucket name
          bucket: env("STORAGE_BUCKET_URL"),
          sortInStorage: true, // true | false
          debug: false, // true | false
        },
      },
    },
  });
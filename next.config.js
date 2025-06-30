// next.config.js
/**
 * Atualização 2025: A propriedade "target" foi removida.
 * Veja mais: https://nextjs.org/docs/messages/deprecated-target-config
 */
module.exports = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

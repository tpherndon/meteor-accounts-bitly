Package.describe({
  summary: "Login service for Bitly accounts"
});

Package.on_use(function (api, where) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('meteor-bitly', ['client', 'server']);

  api.add_files('bitly_login_button.css', 'client');

  api.add_files("bitly.js");
});

//Package.on_test(function (api) {
//  api.use('meteor-accounts-bitly');

//  api.add_files('meteor-accounts-bitly_tests.js', ['client', 'server']);
//});

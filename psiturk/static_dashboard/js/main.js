// Generated by CoffeeScript 1.6.3
require.config({
  paths: {
    jquery: "libs/jquery",
    underscore: "libs/underscore",
    backbone: "libs/backbone",
    text: "libs/text",
    cs: "libs/cs",
    bootstrap: "libs/bootstrap",
    dropdown: "libs/bootstrap-dropdown",
    collapse: "libs/bootstrap-collapse",
    tab: "libs/bootstrap-tab",
    nod: "libs/nod",
    dotimeout: "libs/jquery.dotimeout.min"
  },
  shim: {
    bootstrap: ["jquery"],
    dropdown: ["bootstrap"],
    collapse: ["bootstrap"],
    tab: ["bootstrap"],
    nod: ["jquery"],
    dotimeout: ["jquery"],
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    underscore: {
      exports: "_"
    }
  }
});

require(["jquery", "app", "bootstrap", "dropdown", "collapse", "tab", "dotimeout", "nod"], function($, App, Bootstrap, dropdown, tab) {
  return App.initialize();
});

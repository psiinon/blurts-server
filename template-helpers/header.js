"use strict";

const { getStrings, getFxaUrl } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");

function getSignedInAs(args) {
  const locales = args.data.root.req.supportedLocales;
  const userEmail = args.data.root.req.session.user.primary_email;
  const signedInAs = LocaleUtils.fluentFormat(locales, "signed-in-as", {
    userEmail: `<span class="nav-user-email">${userEmail}</span>`});
  return signedInAs;
}

function navLinks(args) {
  const serverUrl = args.data.root.constants.SERVER_URL;
  const locales = args.data.root.req.supportedLocales;
  const links = [
    {
      title: "Home",
      stringId: "home",
      href: `${serverUrl}/`,
    },
    {
      title: "Breaches",
      stringId: "breaches",
      href: `${serverUrl}/breaches`,
    },
    {
      title: "Security Tips",
      stringId: "security-tips",
      href: `${serverUrl}/security-tips`,
    },
  ];

  return getStrings(links, locales);
}

function fxaMenuLinks(args) {
  const locales = args.data.root.req.supportedLocales;
  const fxaLinks = [
    {
      title: "Preferences",
      stringId: "preferences",
      href: "/user/preferences",
    },
    {
      title: "Firefox Account",
      stringId: "fxa-account",
      href: getFxaUrl(),
    },
    {
      title: "Sign Out",
      stringId: "sign-out",
      href: "/user/logout",
    },
  ];

  return getStrings(fxaLinks, locales);
}

module.exports = {
  navLinks,
  fxaMenuLinks,
  getSignedInAs,
};

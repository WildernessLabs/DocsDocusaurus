// src/components/LinksRow.js
import React from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useIsBrowser from "@docusaurus/useIsBrowser";
import "../css/components/link-row.scss";

function useNavbarItems(siteConfig) {
  let items;
  items = siteConfig.customFields.topNav;

  return items;
}

function getHrefMatch(href) {
  const isBrowser = useIsBrowser();
  if(!isBrowser) return false;
  if(!href) return false;
  var pathname = window.location.pathname;
  if(pathname.endsWith('/'))
  {
    pathname = pathname.substring(pathname.length - 1, -1);
  }
  return isBrowser ? pathname.endsWith(href) : false; //isBrowser helps us bypass a build error, where we don't have access to windo.location - https://docusaurus.io/docs/advanced/ssg#useisbrowser
}

function LinksRow() {
  let { siteConfig } = useDocusaurusContext();
  const items = useNavbarItems(siteConfig);
  return (
    <div className="links-row">
      {items.map((item, i) => (
        <a
          key={i}
          href={`${siteConfig.baseUrl}${item.href}`}
          className={getHrefMatch(item.href) ? "active" : ""}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default LinksRow;

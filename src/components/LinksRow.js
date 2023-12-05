// src/components/LinksRow.js
import React from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import useIsBrowser from "@docusaurus/useIsBrowser";
import "../css/components/link-row.scss";

function useNavbarItems() {
  let items;
  try {
    items = useDocsSidebar().items.filter((item) => item.type === "category");
  } catch (err) {
    items = [
      {
          "href": "/DocsDocusaurus/docs/HackKit/",
          "label": "Hack Kit Pro"
      },
      {
          "href": "/DocsDocusaurus/docs/Hardware/",
          "label": "Hardware & Circuits"
      },
      {
          "href": "/DocsDocusaurus/docs/Meadow/",
          "label": "Meadow Guides"
      },
      {
          "href": "/DocsDocusaurus/docs/Netduino/",
          "label": "Netduino"
      }
  ];
  }

  return items;
}

function getHrefMatch(href) {
  const isBrowser = useIsBrowser();
  return isBrowser ? window.location.pathname.includes(href) : false; //isBrowser helps us bypass a build error, where we don't have access to windo.location - https://docusaurus.io/docs/advanced/ssg#useisbrowser
}

function LinksRow() {
  const items = useNavbarItems();
  return (
    <div className="links-row">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className={getHrefMatch(item.href) ? "active" : ""}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default LinksRow;

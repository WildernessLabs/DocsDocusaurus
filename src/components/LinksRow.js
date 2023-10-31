// src/components/LinksRow.js
import React from 'react';
import { useDocsSidebar } from "@docusaurus/theme-common/internal"
import '../css/components/link-row.scss'

function useNavbarItems() {
  let items;
  try {
    items = useDocsSidebar().items.filter(item => item.type === "category")
  } catch (err)
  {
    items = [];
  }

  console.log(items);

  return items;
}

function getHrefMatch(href)
{
  return window.location.pathname.includes(href);
}

function LinksRow() {
  const items = useNavbarItems();
  return (
    <div className="links-row">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className={getHrefMatch(item.href) ? 'active' : ''}
        >{item.label}</a>
      ))}
    </div>
  );
}

export default LinksRow;
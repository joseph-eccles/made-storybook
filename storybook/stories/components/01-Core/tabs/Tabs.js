import React from "react";
import PropTypes from "prop-types";

export const Tabs = ({
  tabs, 
	content,
}) => {
    return (
        <div>
        <ul class="made-c-tabs__list">
          {tabs.map(function (label, index) {
            return (
              <li class="made-c-tabs__item" id={index}>
                <a href="" id={index} className={
                    index == 0
                      ? "made-c-tabs__link made-c-tabs__link--active"
                      : "made-c-tabs__link"
                    }>
                    {label}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
        {tabs.map(function (label, index) {
          return (
            <div className={
              index == 0
              ? "made-c-tabs__content made-c-tabs__content--active"
              : "made-c-tabs__content"
              }
              role="tabpanel"
              id={`tab-${index}`}
              >
              {content}
            </div>
            );
          })}
        </div>
      </div>
	);
};

Tabs.propTypes = {
  tabs: PropTypes.objectOf(PropTypes.string),
	content: PropTypes.string,
};

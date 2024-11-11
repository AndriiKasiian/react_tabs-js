export const Tabs = ({ tabs, activeId, onTabSelected, activeTab }) => {
  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li data-cy="Tab" className={tab.id === activeId ? 'is-active' : ''}>
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== activeId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="TabContent">
        {`${activeTab.content}`}
      </div>
    </div>
  );
};

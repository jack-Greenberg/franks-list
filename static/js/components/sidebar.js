import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  margin: 8px;
`;

const TagChildrenContainer = styled.div`
  margin-left: 1em;
`

const TagToggle = styled.span`
  background-color: ${(props) => props.checked ? `${props.color}33` : 'unset'};
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
  cursor: pointer;
  padding: 0.2em 0.2em 0.2em 12px;
  position: relative;
  user-select: none;
  word-break: keep-all;
  
  &::before {
    background-color: ${(props) => props.checked ? props.color : 'unset'};
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 8px;
  }
`;
/*
const ExpandCollapseCaret = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 18 15 12 9 6">
                      </polyline>
                    </svg>
);

const StyledExpandCollapseCaret = styled(ExpandCollapseCaret)`
  transition: rotation 0.3s ease;
  transform: rotate(${(props) => props.expanded ? 0 : 90}deg);
`;
*/


const Tag = (props) => {
  const {
    tag,
    onTagClicked,
    tagStates,
  } = props;
  const checked = tagStates[tag.path].visible;
  return (
  <TagContainer>
    <TagToggle
      aria-checked={checked}
      checked={checked}
      color={tag.color}
      className={checked ? 'checked' : ''}
      onClick={() => onTagClicked(tag)}
      role="checkbox"
    >
      {tag.displayName}
    </TagToggle>
    {/*{tag.children && <StyledExpandCollapseCaret expanded={tag.defaultVisible}/>}*/}
  </TagContainer>
  );
};

const TagFamilyWrapper = styled.div`
  
  
`;

const TagFamily = (props) => (
  <TagFamilyWrapper>
    <Tag {...props} />
    {props.tag.children && (
      <TagChildrenContainer>
        {props.tag.children.map(childTag => <TagFamily {...props} tag={childTag}/>)}
      </TagChildrenContainer>
    )}
  </TagFamilyWrapper>
);

const SidebarWrapper = styled.div`
  flex-shrink: 0;
`;

const Sidebar = (props) => (
  <SidebarWrapper>
    <h2 className="Sidebar__header">
      <svg className="Sidebar__header__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
      </svg>
      FILTERS
    </h2>
    {props.tags.map(tag => <TagFamily tag={tag} {...props} />)}
  </SidebarWrapper>
);
  function  render() {
        return (
            <>
              <section className="Sidebar__section">
                  <h2 className="Sidebar__header">
                      <svg className="Sidebar__header__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                      </svg>
                      FILTERS
                  </h2>

                  <div>
                    <ul className="Sidebar__filter__list">
                      <li>
                        <input type="checkbox" id="filter--academic" checked={this.props.tags['academic_affairs']} onClick={this.props.handleClick} value={"academic_affairs"} />
                        <label for="filter--academic" className="Sidebar__filter">
                            Academic Affairs
                        </label>
                        <input type="checkbox" id="dropdown--academic" className="Sidebar__filter__icon" defaultChecked={false}/>
                        <label for="dropdown--academic">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6">
                            </polyline>
                          </svg>
                        </label>

                        <ul className="Sidebar__filter__list__group">
                          <li className="Sidebar__filter__list">
                            <input type="checkbox" id="filter--academic_calendar" checked={this.props.tags['academic_calendar']} onClick={this.props.handleClick} value={"academic_calendar"} />
                            <label for="filter--academic_calendar" className="Sidebar__filter">
                                Academic Calendar
                            </label>
                          </li>
                          <li className="Sidebar__filter__list">
                            <input type="checkbox" id="filter--academic_advising" checked={this.props.tags['academic_advising']} onClick={this.props.handleClick} value={"academic_advising"} />
                            <label for="filter--academic_advising" className="Sidebar__filter">
                                Academic Advising
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <input type="checkbox" id="filter--student" checked={this.props.tags['student_affairs']} onClick={this.props.handleClick} value={"student_affairs"} />
                        <label for="filter--student" className="Sidebar__filter">
                            Student Affairs
                        </label>
                        <input type="checkbox" id="dropdown--student" className="Sidebar__filter__icon" defaultChecked={false}/>
                        <label for="dropdown--student">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6">
                            </polyline>
                          </svg>
                        </label>

                        <ul className="Sidebar__filter__list__group">
                          <li className="Sidebar__filter__list">
                            <input type="checkbox" id="filter--residential" checked={this.props.tags['residential']} onClick={this.props.handleClick} value={"residential"} />
                            <label for="filter--residential" className="Sidebar__filter">
                                Residential Life
                            </label>
                          </li>
                          <li className="Sidebar__filter__list">
                            <input type="checkbox" id="filter--health" checked={this.props.tags['health']} onClick={this.props.handleClick} value={"health"} />
                            <label for="filter--health" className="Sidebar__filter">
                                Health & Wellness
                            </label>
                          </li>
                          <li className="Sidebar__filter__list">
                            <input type="checkbox" id="filter--international" checked={this.props.tags['international']} onClick={this.props.handleClick} value={"international"} />
                            <label for="filter--international" className="Sidebar__filter">
                                Intl' & Study Away
                            </label>
                          </li>
                          <li className="Sidebar__filter__list">
                            <input type="checkbox" id="filter--pgp" checked={this.props.tags['pgp']} onClick={this.props.handleClick} value={"pgp"} />
                            <label for="filter--pgp" className="Sidebar__filter">
                                PGP
                            </label>
                          </li>
                          <li className="Sidebar__filter__list">
                            <input type="checkbox" id="filter--hr" checked={this.props.tags['hr']} onClick={this.props.handleClick} value={"hr"} />
                            <label for="filter--hr" className="Sidebar__filter">
                                HR
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <input type="checkbox" id="filter--admission" checked={this.props.tags['admission']} onClick={this.props.handleClick} value={"admission"} />
                        <label for="filter--admission" className="Sidebar__filter">
                            Admission & Financial Aid
                        </label>
                      </li>

                      <li>
                        <input type="checkbox" id="filter--library" checked={this.props.tags['library']} onClick={this.props.handleClick} value={"library"} />
                        <label for="filter--library" className="Sidebar__filter">
                            The Library
                        </label>
                      </li>

                      <li>
                        <input type="checkbox" id="filter--shop" checked={this.props.tags['shop']} onClick={this.props.handleClick} value={"shop"} />
                        <label for="filter--shop" className="Sidebar__filter">
                            The Shop
                        </label>
                      </li>

                      <li>
                        <input type="checkbox" id="filter--clubs" checked={this.props.tags['library']} onClick={this.props.handleClick} value={"clubs"} />
                        <label for="filter--clubs" className="Sidebar__filter">
                            Clubs & Organizations
                        </label>
                      </li>

                      <li>
                        <input type="checkbox" id="filter--other" checked={this.props.tags['shop']} onClick={this.props.handleClick} value={"other"} />
                        <label for="filter--other" className="Sidebar__filter">
                            Other Events
                        </label>
                      </li>
                    </ul>
                  </div>
              </section>

              <section className="Sidebar__section">
                  <h2 className="Sidebar__header">
                      <svg className="Sidebar__header__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      OTHER CALENDARS
                  </h2>
                  <ul className="Sidebar__filter__list">
                      <li><p className="Sidebar__body">&#183;<a href="https://www.foundry.babson.edu/events-calendar" target="_blank"> The Weissman Foundry</a></p></li>
                      <li><p className="Sidebar__body">&#183;<a href="http://calendar.babson.edu/" target="_blank"> Babson College</a></p></li>
                      <li><p className="Sidebar__body">&#183;<a href="https://www.wellesley.edu/publiccalendar#/?i=1" target="_blank"> Wellesley College</a></p></li>
                  </ul>
              </section>
            </>
        )
}

export default Sidebar;

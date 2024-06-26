import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { getTerms } from '../api/termData';
import { showTerms } from '../pages/terms';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all vocab words on the DOM on App load
  getTerms().then((terms) => showTerms(terms));
};

export default startApp;

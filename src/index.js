import App from "./components/App.js";

(function () {
  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root' />`);
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})();
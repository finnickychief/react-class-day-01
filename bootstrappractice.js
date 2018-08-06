const Nav = props => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 className="my-0 mr-md-auto font-weight normal">Company name</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a href="#" className="p-2 text-dark">
        Features
      </a>
      <a href="#" className="p-2 text-dark">
        Enterprise
      </a>
      <a href="#" className="p-2 text-dark">
        Support
      </a>
      <a href="#" className="p-2 text-dark">
        Pricing
      </a>
    </nav>
    <a href="#" className="btn btn-outline-primary">
      Sign up
    </a>
  </div>
);

const Page = props => <Nav />;

const rootElement = document.querySelector('#root');

ReactDOM.render(Page, rootElement);

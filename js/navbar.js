class Mynavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<nav class="navbar navbar-expand-lg  navmain">
      <div class="container">
        <!-- <a class="navbar-brand" href="#"><img src ="images//Logo.png" class="logo" alt="logo"></a> -->
        <a class="navbar-brand" href="#"><img src="images//Logo-removebg-preview.png" class="img-fluid logo_img" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navlink">
            <li class="nav-item dropdown">
              <a class="nav-link nav_lnk nav_link Header-subtitle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>Services</strong>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="services.html"><img src="images/Data_engineer.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspData Engineering</a></li>
                <li><a class="dropdown-item" href="#"><img src="images/Data_analytics.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspData Analytics</a></li>
                <li><a class="dropdown-item" href="#"><img src="images/Data_Science.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspData Science</a></li>
                <li><a class="dropdown-item" href="#"><img src="images/Data_Ingesting.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspData Ingesting</a></li>
                <li><a class="dropdown-item" href="#"><img src="images/Migration.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspMigration</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link nav_lnk nav_link Header-subtitle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <strong>
                  Industries
                </strong>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="industries.html"><img src="images/HLS.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspHLS</a></li>
                <li><a class="dropdown-item" href="#"><img src="images/Retail.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspRetail</a></li>
                <li><a class="dropdown-item" href="#"><img src="images/Manufacturing.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspManufacturing</a></li>
                <li><a class="dropdown-item" href="#"><img src="images/Finance.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspFinancial Services</a></li>
                <li><a class="dropdown-item" href="#"><img src="images/CPG.png" class="img-fluid icon-nav" alt="Responsive image">&nbsp&nbspCPG</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav_link Header-subtitle" href="#"><strong>Company</strong></a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav_link Header-subtitle" href="#"><strong>Blog</strong></a>
            </li>
          </ul>
          <button class="btn btn-outline-primary nav_btn" type="button"><strong>Contact Us</strong></button>
        </div>
      </div>
    </nav>`;
    }
  }
  
  customElements.define('my-navbar', Mynavbar);
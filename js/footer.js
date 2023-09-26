class Myfooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footerMain">
      <div class="container">
        <div class="row">
  
          <div class="col-md-2">
  
            <ul class="footer-list">
              <li>
                <h5>Services</h5>
              </li>
              <li class="pt-2"><a href="services.html#Data_Engineering">Data Engineering</a></li>
              <li class="pt-2"><a href="services.html#Data_Analytics">Data Analytics</a></li>
              <li class="pt-2"><a href="services.html#Data_Science">Data Science</a></li>
              <li class="pt-2"><a href="services.html#Data_Ingesting">Data Ingesting</a></li>
              <li class="pt-2"><a href="services.html#Migration">Migration</a></li>
            </ul>
          </div>
          <div class="col-md-2">
            <ul class="footer-list">
              <li>
                <h5>Industries</h5>
              </li>
              <li class="pt-2"><a href=industries.html#HLS">HLS</a></li>
              <li class="pt-2"><a href="industries.html#Retail">Retail</a></li>
              <li class="pt-2"><a href="industries.html#Manufacturing">Manufacturing</a></li>
              <li class="pt-2"><a href="industries.html#Financial_services">Financial Services</a></li>
              <li class="pt-2"><a href="industries.html#CPG">CPG</a></li>
            </ul>
          </div>
          <div class="col-md-2">
          <ul class="footer-list">
            <li>
              <h5>Company</h5>
            </li>
            <li class="pt-2"><a href="company.html">About</a></li>
            <li class="pt-2"><a href="reference.html">Reference</a></li>
            <li class="pt-2"><a href="partners.html">Partners</a></li>
            <li class="pt-2"><a href="blog.html">Blog</a></li>
          </ul>
        </div>

          <div class="col-md-2">
            <ul class="footer-list">
              <li>
                <h5>Contact</h5>
              </li>
              <li class="pt-2"><a href="mailto:ram@unboundedata.com">ram@unboundedata.com</a></li>
              <li class="pt-2"><a href="tel:+1-408-475-3960">+1-408-475-3960</a></li>
            </ul>
          </div>
  
          <div class="col-md-4">
            <div class="">
              <ul class="footer-list rightmenu">
                <li class="footer_clr"><a href="privacyPolicy.html">Privacy Policy</a> |
                  <a href="terms&conditions.html">Terms of Use</a>
                </li>
                <li class="pt-2">
                  <p>Copyright &copy;2023 Unboundedata - All right reserved. </p>
                </li>
                <li>
                  <p>US Office : 6203 San Ignacio Avenue Suite 110, San Jose, California 95119</p>
                </li>
              </ul> 
            </div>
  
          </div>
        </div>
      </div>
    </footer>`;
  }
}

customElements.define('my-footer', Myfooter);
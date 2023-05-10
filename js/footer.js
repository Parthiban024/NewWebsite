class Myfooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footerMain">
      <div class="container">
        <div class="row">
  
          <div class="col-md-2 ">
  
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
                <h5>Contact</h5>
              </li>
              <li class="pt-2"><a href="mailto:sales@unboundeddata.com">sales@unboundeddata.com</a></li>
              <li class="pt-2"><a href="tel:+1-800-343-5432">1-800-343-5432</a></li>
            </ul>
          </div>
  
          <div class="col-md-6">
            <div class="">
              <ul class="footer-list rightmenu">
                <li class="footer_clr"><a href="privacyPolicy.html">Privacy Policy</a> |
                  <a href="terms&conditions.html">Terms of Use</a>
                </li>
                <li class="pt-2">
                  <p>Copyright &copy;2023 Unboundeddata - All right reserved. </p>
                </li>
                <li>
                  <p>US Office : 20715 N Pima Road, Scottsdale, AZ 85255</p>
                </li>
                <li>
                  <p> India Office : 4353 , N.K. Palace, Chennai, TN 600028 </p>
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
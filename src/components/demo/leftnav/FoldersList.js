import React, { PureComponent } from 'react';
import $ from 'jquery';

class FoldersList extends PureComponent {
  componentDidMount() {
    $.fn.extend({
      treed: function (o) {
        var openedClass = 'fa-caret-down';
        var closedClass = 'fa-caret-right';
        
        if (typeof o != 'undefined'){
          if (typeof o.openedClass != 'undefined'){
          openedClass = o.openedClass;
          }
          if (typeof o.closedClass != 'undefined'){
          closedClass = o.closedClass;
          }
        };
        
          //initialize each of the top levels
          var tree = $(this);
          tree.addClass("tree");
          tree.find('li').has("ul").each(function () {
              var branch = $(this); //li with children ul
              branch.prepend("<i class='indicator fas " + closedClass + "'></i>");
              branch.addClass('branch');
              branch.on('click', function (e) {
                  if (this == e.target) {
                      var icon = $(this).children('i:first');
                      icon.toggleClass(openedClass + " " + closedClass);
                      $(this).children().children().toggle();
                  }
              })
              branch.children().children().toggle();
          });
          //fire event from the dynamically added icon
        tree.find('.branch .indicator').each(function(){
          $(this).on('click', function () {
              $(this).closest('li').click();
          });
        });
          //fire event to open branch if the li contains an anchor instead of text
          tree.find('.branch>a').each(function () {
              $(this).on('click', function (e) {
                  $(this).closest('li').click();
                  e.preventDefault();
              });
          });
          //fire event to open branch if the li contains a button instead of text
          tree.find('.branch>button').each(function () {
              $(this).on('click', function (e) {
                  $(this).closest('li').click();
                  e.preventDefault();
              });
          });
      }
    });

    $('#tree2').treed({ openedClass:'fa-caret-down', closedClass:'fa-caret-right' });
    $('#tree3').treed({ openedClass:'fa-caret-down', closedClass:'fa-caret-right' });

    $('.js-context').on('contextmenu', function(e) {
      var top = e.pageY - 100;
      var left = e.pageX;
      $(".context-menu").css({
        display: "block",
        top: top,
        left: left
      }).addClass("show");
      return false; //blocks default Webbrowser right click menu
    }).on("click", function() {
      $(".context-menu").removeClass("show").hide();
    });
    
    $(document).click(function(){
      $(".context-menu").hide();
    });
  }

  render() {
    return (
      <div className="folder-tree pt-4">
        <h5><i className="far fa-folder" /> Mappar</h5>
        <hr />
        <ul id="tree2">
          <li><i className="fas fa-folder" /> <a href="#" className="js-context">Mina ritningar</a></li>
          <li>
            <i className="fas fa-folder text-info" /> <a href="#" className="js-context">Folder 1</a>
            <ul>
              <li>
                <i className="fas fa-folder" /> <a href="#" className="js-context">Min Folder 1.1</a>
                <ul>
                  <li>
                    <i className="fas fa-folder text-success" /> <a href="#" className="js-context">Sub folder 1.1.1</a>
                    <ul>
                      <li><i className="fas fa-folder" /> <a href="#" className="js-context">Report1</a></li>
                      <li><i className="fas fa-folder" /> <a href="#" className="js-context">Report2</a></li>
                      <li><i className="fas fa-folder" /> <a href="#" className="js-context">Report3</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><i className="fas fa-folder" /> <a href="#" className="js-context">VVS</a></li>
          <li>
            <i className="fas fa-folder" /> <a href="#" className="js-context">EL</a>
            <ul>
              <li>
                <i className="fas fa-folder" /> <a href="#" className="js-context">Elritningar</a>
                <ul>
                  <li><i className="fas fa-folder" /> <a href="#" className="js-context">Folder 1</a></li>
                  <li><i className="fas fa-folder" /> <a href="#" className="js-context">Folder 2</a></li>
                  <li><i className="fas fa-folder" /> <a href="#" className="js-context">Folder 3</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><i className="fas fa-folder" /> <a href="#" className="js-context">Kontorstrycksaker</a></li>
          <li><i className="fas fa-folder" /> <a href="#" className="js-context">Visitkort</a></li>
          <li><i className="fas fa-folder text-danger" /> <a href="#" className="js-context">Korrkort</a></li>
        </ul>
        <ul className="dropdown-menu dropdown-menu-sm context-menu">
          <li>
            <a className="dropdown-item" href="#">Ny mapp</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Byt namn</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Radera</a>
          </li>
          <li className="dropdown-submenu">
            <a className="dropdown-item" href="#" tabIndex="-1">Färgmarkering</a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Röd</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Orange</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Gul</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Grön</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Normal</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Valfri färg</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Ingen färg</a>
              </li>
            </ul>
          </li>
          <div className="dropdown-divider" />
          <li>
            <a className="dropdown-item" href="#">Ladda ner</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Dela ut</a>
          </li>
          <li>
            <a className="dropdown-item" href="#modal-notify-distribute" data-toggle="modal" data-targe="#modal-notify-distribute">Bevaka</a>
          </li>
          <div className="dropdown-divider" />
          <li className="dropdown-submenu">
            <a className="dropdown-item" href="#" tabIndex="-1">Skapa</a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Ärende</a>
              </li>
              <li className="dropdown-submenu">
                <a className="dropdown-item" href="#" tabIndex="-1">Förfrågningsunderlag</a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">Nytt</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">Påbörja komplettering (KFU)</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">Hämta länk</a>
                  </li>
                </ul>
              </li>
              <div className="dropdown-divider" />
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Publikation</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Paket (kit)</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Kombinationsartikel</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Egenskapsprodukt</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Statisk mall</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Dynamisk mall</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Online Designer-mall</a>
              </li>
              <div className="dropdown-divider" />
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Sajtmall</a>
              </li>
            </ul>
          </li>
          <li className="dropdown-submenu">
            <a className="dropdown-item" href="#">Mappoperationer</a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Mapprättigheter</a>
              </li>
              <li className="dropdown-submenu">
                <a className="dropdown-item" href="#" tabIndex="-1">Dokumentskydd</a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">Lås upp PDF-fil(er)</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">Lås PDF-fil(er)</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">Låna ut PDF-fil(er)</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a className="dropdown-item" href="#" tabIndex="-1">Skapa nya mappar</a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">5 mappar</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">10 mappar</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">12 mappar</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">15 mappar</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">20 mappar</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" tabIndex="-1">31 mappar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">PrintVis-data</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" tabIndex="-1">Konvertera mapp till Online Designer-bilder</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="AddToShoppingCart">Lägg till varukorg</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FoldersList;
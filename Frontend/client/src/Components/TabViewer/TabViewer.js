import react from 'react';

class TabViewer extends React.Component {
    constructor(props) {
        super(props)
    }

    openTab(evt, tabName) {
        // Declare all variables
        var i, thisTab, tabContent, tabLinks;
      
        // Get all elements with class="tabcontent" and hide them
        thisTab = document.getElementsById(this.props.contentDivId);
        tabContent = thisTab.getElementsByClassName("tabcontent")
        for (i = 0; i < tabContent.length; i++) {
          tabContent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = thisTab.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        thisTab.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
      } 

    render() {


        return (
            <div id={this.props.contentDivId}></div>
        );
    }
}
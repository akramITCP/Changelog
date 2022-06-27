const container = "#contenedor";
const titleContainer = "#title";

$(() => {
  FetchData();
});

///////////////////////// FETCH DATA FROM ZOHO /////////////////////////
function FetchData() {
  ZOHO.CREATOR.init().then(function () {
    config = {
      reportName: "ChangeLog1_Report",
      criteria: "",
    };

    // Get data from Zoho
    ZOHO.CREATOR.API.getAllRecords(config).then(function (response) {
      var data = response.data;
      console.log(data);

      var md = new remarkable.Remarkable();

      for (var i = 0; i < data.length; i++) {
        let auxRow = "<div class='row'>";
        auxRow += "<div class='col d-flex flex-row align-items-center' id='subtitle'>" + md.render(data[i].Version) + "</div>";
        auxRow += "</div>";
        auxRow += "<div class='row mb-3'>"
        auxRow += "<div class='col'>" + md.render(data[i].Text) + "</div>";
        auxRow += "</div>";
        $(container).append(auxRow);
      }
    });
  });
}

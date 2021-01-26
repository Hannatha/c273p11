$(document).ready(function () {
                $("#btnSubmit").click(function () {
                    var person = {};
                    person.name = $("[name=name]").val();
                    person.email = $("[name=email]").val();
                    person.postalCode = $("[name=postalCode]").val();
                    localStorage.setItem("person", JSON.stringify(person));
                });
                
                var person = JSON.parse(localStorage.getItem("person"));

                    if (person != null) {
                        var message = "";
                        message += "Name: " + person.name + "<br/>";
                        message += "Email: " + person.email + "<br/>";
                        message += "Postal Code: " + person.postalCode;
                        $("#results").html(message);
                    };
            });
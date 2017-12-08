$(document).ready(function () {
    $('#userTable').DataTable({
        "ajax": {
            "url": "user/data",
            "type": "GET"
        },
        "processing": true,
        "serverSide": true,
        "order": [[0, "desc"]],
        "columns": [
            {
                "data": "id",
            },
            {
                "data": "username",
                "render": function (data, type, row, meta) {
                    return data + " " + row.username;
                }
            },
            {
                "data": "firstname",
                "render": function (data, type, row, meta) {
                    return data + " " + row.firstname;
                }
            },
            {
                "data": "lastname",
                "render": function (data, type, row, meta) {
                    return data + " " + row.lastname;
                }
            },

            {
                "data": "companyname",
                "render": function (data, type, row, meta) {
                    return data + " " + row.companyname;
                }
            },

        ]
    });

});
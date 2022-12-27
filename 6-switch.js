let select;
select = parseInt(prompt("select any number for flowers (like 1 to 5):"));

switch (select) {

    case 1:
        document.write("You select rose :-");
        let rose;
        rose = parseInt(prompt("select how many rose you want (like 1 or 2)"));

        switch (rose) {
            case 1:
                document.write("You want One Rose")
                break;

            case 2:
                document.write(" you want ", parseInt(prompt(" select exact number of rose you want ")), " rose ");
                break;
        }

        break;

    case 2:
        document.write("You select Lilly:-");
        let lilly;
        lilly = parseInt(prompt("select how many Lilly you want (like 1 or 2)"));

        switch (lilly) {
            case 1:
                document.write("You want One Lilly")
                break;

            case 2:
                document.write(" you want ", parseInt(prompt(" select exact number of Lilly you want ")), " Lilly ");
                break;
        }

        break;

    case 3:
        document.write("You select Lotus :-");
        let lotus;
        lotus = parseInt(prompt("select how many Lotus you want (like 1 or 2)"));

        switch (lotus) {
            case 1:
                document.write("You want One Lotus")
                break;

            case 2:
                document.write(" you want ", parseInt(prompt(" select exact number of Lotus you want ")), " Lotus ");
                break;
        }

        break;

    case 4:
        document.write("You select All Flowers");
        break;

    default:
        document.write("There is no option available");
}
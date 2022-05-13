using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamManagement.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AdminPassword",
                table: "Administrators",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "AdminLastName",
                table: "Administrators",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "AdminFirstname",
                table: "Administrators",
                newName: "Firstname");

            migrationBuilder.RenameColumn(
                name: "AdminEmail",
                table: "Administrators",
                newName: "Email");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Administrators",
                newName: "AdminPassword");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Administrators",
                newName: "AdminLastName");

            migrationBuilder.RenameColumn(
                name: "Firstname",
                table: "Administrators",
                newName: "AdminFirstname");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Administrators",
                newName: "AdminEmail");
        }
    }
}

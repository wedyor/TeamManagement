using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamManagement.Migrations
{
    public partial class fixjson2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Users_UserId",
                table: "Requests");

            migrationBuilder.DropIndex(
                name: "IX_Requests_UserId",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Requests");

            migrationBuilder.AddColumn<int>(
                name: "id",
                table: "Requests",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Requests_id",
                table: "Requests",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Users_id",
                table: "Requests",
                column: "id",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Users_id",
                table: "Requests");

            migrationBuilder.DropIndex(
                name: "IX_Requests_id",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "id",
                table: "Requests");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Requests",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Requests_UserId",
                table: "Requests",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Users_UserId",
                table: "Requests",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

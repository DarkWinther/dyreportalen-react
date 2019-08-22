namespace dyreportalen_webapi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Ads",
                c => new
                    {
                        Ad_id = c.Int(nullable: false, identity: true),
                        Created = c.DateTime(nullable: false),
                        Title = c.String(),
                        Text = c.String(),
                        City = c.String(),
                        ImageUrl = c.String(),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        AdType_AdType_id = c.Int(),
                        Category_Category_id = c.Int(),
                        Race_Race_id = c.Int(),
                        User_User_id = c.Int(),
                    })
                .PrimaryKey(t => t.Ad_id)
                .ForeignKey("dbo.AdTypes", t => t.AdType_AdType_id)
                .ForeignKey("dbo.Categories", t => t.Category_Category_id)
                .ForeignKey("dbo.Races", t => t.Race_Race_id)
                .ForeignKey("dbo.Users", t => t.User_User_id)
                .Index(t => t.AdType_AdType_id)
                .Index(t => t.Category_Category_id)
                .Index(t => t.Race_Race_id)
                .Index(t => t.User_User_id);
            
            CreateTable(
                "dbo.AdTypes",
                c => new
                    {
                        AdType_id = c.Int(nullable: false, identity: true),
                        AdTypeName = c.String(),
                    })
                .PrimaryKey(t => t.AdType_id);
            
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Category_id = c.Int(nullable: false, identity: true),
                        Category_Name = c.String(),
                    })
                .PrimaryKey(t => t.Category_id);
            
            CreateTable(
                "dbo.Races",
                c => new
                    {
                        Race_id = c.Int(nullable: false, identity: true),
                        RaceName = c.String(),
                        Category_Category_id = c.Int(),
                    })
                .PrimaryKey(t => t.Race_id)
                .ForeignKey("dbo.Categories", t => t.Category_Category_id)
                .Index(t => t.Category_Category_id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        User_id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Address = c.String(),
                        City = c.String(),
                        ZipCode = c.Int(nullable: false),
                        Email = c.String(),
                        Password = c.String(),
                        PhoneNumber = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.User_id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Ads", "User_User_id", "dbo.Users");
            DropForeignKey("dbo.Ads", "Race_Race_id", "dbo.Races");
            DropForeignKey("dbo.Races", "Category_Category_id", "dbo.Categories");
            DropForeignKey("dbo.Ads", "Category_Category_id", "dbo.Categories");
            DropForeignKey("dbo.Ads", "AdType_AdType_id", "dbo.AdTypes");
            DropIndex("dbo.Races", new[] { "Category_Category_id" });
            DropIndex("dbo.Ads", new[] { "User_User_id" });
            DropIndex("dbo.Ads", new[] { "Race_Race_id" });
            DropIndex("dbo.Ads", new[] { "Category_Category_id" });
            DropIndex("dbo.Ads", new[] { "AdType_AdType_id" });
            DropTable("dbo.Users");
            DropTable("dbo.Races");
            DropTable("dbo.Categories");
            DropTable("dbo.AdTypes");
            DropTable("dbo.Ads");
        }
    }
}

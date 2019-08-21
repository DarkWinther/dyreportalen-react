namespace dyreportalen_webapi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
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
                        adType_AdType_id = c.Int(),
                        category_Category_id = c.Int(),
                        race_Race_id = c.Int(),
                    })
                .PrimaryKey(t => t.Ad_id)
                .ForeignKey("dbo.AdTypes", t => t.adType_AdType_id)
                .ForeignKey("dbo.Categories", t => t.category_Category_id)
                .ForeignKey("dbo.Races", t => t.race_Race_id)
                .Index(t => t.adType_AdType_id)
                .Index(t => t.category_Category_id)
                .Index(t => t.race_Race_id);
            
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
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Ads", "race_Race_id", "dbo.Races");
            DropForeignKey("dbo.Races", "Category_Category_id", "dbo.Categories");
            DropForeignKey("dbo.Ads", "category_Category_id", "dbo.Categories");
            DropForeignKey("dbo.Ads", "adType_AdType_id", "dbo.AdTypes");
            DropIndex("dbo.Races", new[] { "Category_Category_id" });
            DropIndex("dbo.Ads", new[] { "race_Race_id" });
            DropIndex("dbo.Ads", new[] { "category_Category_id" });
            DropIndex("dbo.Ads", new[] { "adType_AdType_id" });
            DropTable("dbo.Races");
            DropTable("dbo.Categories");
            DropTable("dbo.AdTypes");
            DropTable("dbo.Ads");
        }
    }
}

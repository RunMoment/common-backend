const apiUrl = "http://localhost:8888"

// 菜单图标
var icons = new Map();
icons.set("SYSTEM","icon-setup_fill");
icons.set("DATACENTER","icon-chart");
icons.set("DEVELOP:GENERATOR","icon-barrage_fill");
icons.set("DEVELOP:DATABASE","icon-ali-clould-fill");
icons.set("DEVELOP:EXCEPTION","icon-flashlight_fill");
icons.set("MANAGEMENT","icon-manage_fill");
icons.set("DEVELOP","icon-codelibrary-fill");
icons.set("DEVELOP:DATABASE","icon-database");
icons.set("MANAGEMENT:USER","icon-people_fill");
icons.set("MANAGEMENT:ROLE","icon-role");
icons.set("MANAGEMENT:AUTHORITY","icon-quanxian");

export default {
	apiUrl,
	icons
}
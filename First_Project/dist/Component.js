sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","first/project/First_Project/model/models"],function(e,t,i){"use strict";return e.extend("first.project.First_Project.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
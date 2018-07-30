// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.28 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"24","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Load","Save Command":"Save","Delete Command":"Delete","---Help Window---":"","Select Help":"Please select a file slot.","Load Help":"Loads the data from the saved game.","Save Help":"Saves the current progress in your game.","Delete Help":"Deletes all data from this save file.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"This save is for a different game.","Empty Game Text":"Empty","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"","Data Column 2":"location, playtime, save count, gold count","Data Column 3":"","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Playtime:","Save Count":"Total Saves:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Do you wish to load this save file?","Save Confirmation":"true","Save Text":"Do you wish to overwrite this save file?","Delete Confirmation":"true","Delete Text":"Do you wish to delete this save file?","Confirm Yes":"Yes","Confirm No":"No"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.46 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_TurnOrderDisplay","status":true,"description":"v1.03 Displays the turn order for turn-based battle systems\nand allows for various display options.","parameters":{"---Default---":"","Show Turn Order":"true","---Settings---":"","Icon Size":"32","Position X":"right","Position Y":"54","Turn Direction":"left","Performed Spacing":"true","---Allies---":"","Ally Border Color":"4","Ally Back Color":"22","Ally Icon":"0","---Enemies---":"","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.09 A simple battle status window that shows the\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"16","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"7","Param Current Max":"false","Adjust Columns":"false","State Icons Row":"1","---Actor Switching---":"","Left / Right":"true","PageUp / PageDown":"true","Allow Turn Skip":"true","---Front View---":"","Show Animations":"true","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"-16"}},
{"name":"DreamX_Ext_BattleStatusCore","status":true,"description":"v1.6","parameters":{"--General Status--":"","Battle Status Frame Opacity":"1","Battle Status Window Opacity":"255","Battle Status Width":"Graphics.boxWidth - 192","Battle Status Height":"this.fittingHeight(this.numVisibleRows())","Battle Status Input X":"this._partyCommandWindow.width","Battle Status Action X":"this._partyCommandWindow.width / 2","Battle Status Y":"Graphics.boxHeight - this.windowHeight()","Battle Status Rows":"1","Battle Status Item Width":"this.contents.width / this.maxCols()","Battle Status Item Height":"this.lineHeight() * this.numVisibleRows()","Battle Status Columns":"Yanfly.Param.BSWAdjustCol ? this.maxItems() : $gameParty.maxBattleMembers()","Battle Status Max Visible Rows":"Yanfly.Param.BECCommandRows || 4","Battle Status Spacing":"0","Battle Status Dummy Windows":"false","Battle Status Dummy Window Prevent Cutoff":"true","Battle Status Dummy Window Quantity":"$gameParty.battleMembers().length","Flash Current Actor Rect":"false","Battle Status Dim Window":"false","Allow Switch Actor With Directional Buttons":"true","Allow Left To Party Command":"true","Allow Cancel To Party Command":"true","Allow Cancel Actor Command":"true","Allow Right To Actor Command":"true","Allow Right To Confirm Turn":"true","--Status Faces--":"","Draw Face":"true","Draw Face Width":"Math.min(rect.width - 8, Window_Base._faceWidth)","Draw Face Height":"Math.min(rect.height - 8, Window_Base._faceHeight)","Face X":"rect.x + rect.width - ww - 6","Face Y":"rect.y + 4","--Status Gauges--":"","Current Value Font Size":"Yanfly.Param.BSWParamFontSize","Max Value Font Size":"Yanfly.Param.BSWParamFontSize","-HP Gauge-":"","Draw HP Gauge":"true","Hide HP Gauge":"false","HP Gauge X":"gaugeRect.x","HP Gauge Y":"gaugeRect.y + gaugeRect.height - this.lineHeight() - (Math.max(16, (Imported.YEP_CoreEngine) ? Yanfly.Param.GaugeHeight : 6))","HP Gauge Width":"gaugeRect.width","Hide HP Name":"false","HP Name X":"eval(paramHpGaugeX)","HP Name Y":"eval(paramHpGaugeY)","HP Name Width":"44","HP Name Alignment":"left","Hide HP Values":"false","HP Values X":"eval(paramHpGaugeX)","HP Values Y":"eval(paramHpGaugeY)","HP Values Width":"eval(paramHpGaugeWidth)","HP Values Alignment":"right","-MP Gauge-":"","Draw MP Gauge":"true","Hide MP Gauge":"false","MP Gauge X":"gaugeRect.x","MP Gauge Y":"gaugeRect.y + gaugeRect.height - this.lineHeight()","MP Gauge Width":"gaugeRect.width","Hide MP Name":"false","MP Name X":"eval(paramMpGaugeX)","MP Name Y":"eval(paramMpGaugeY)","MP Name Width":"44","MP Name Alignment":"left","Hide MP Values":"false","MP Values X":"eval(paramMpGaugeX)","MP Values Y":"eval(paramMpGaugeY)","MP Values Width":"eval(paramMpGaugeWidth)","MP Values Alignment":"right","-TP Gauge-":"","Draw TP Gauge":"true","Hide TP Gauge":"false","TP Gauge X":"gaugeRect.x","TP Gauge Y":"gaugeRect.y + gaugeRect.height - this.lineHeight()","TP Gauge Width":"gaugeRect.width","Hide TP Name":"false","TP Name X":"eval(paramTpGaugeX)","TP Name Y":"eval(paramTpGaugeY)","TP Name Width":"44","TP Name Alignment":"left","Hide TP Values":"false","TP Values X":"eval(paramTpGaugeX)","TP Values Y":"eval(paramTpGaugeY)","TP Values Width":"eval(paramTpGaugeWidth)","TP Values Alignment":"right","-ATB Gauge-":"","ATB Gauge X":"basicAreaRect.x","ATB Gauge Y":"basicAreaRect.y","ATB Gauge Width":"basicAreaRect.width","--Status Action Icons--":"","Draw Action Icon":"true","Action Icon X":"basicAreaRect.x","Action Icon Y":"basicAreaRect.y","--Status Names--":"","Draw Name":"true","Name X":"basicAreaRect.x + Window_Base._iconWidth + 4","Name Y":"basicAreaRect.y","Name Width":"basicAreaRect.width","Name Alignment":"left","-- Status Icons--":"","Draw Icons":"true","Icons X":"basicAreaRect.x + 2","Icons Y":"basicAreaRect.y + this.lineHeight()","Icons Width":"basicAreaRect.width","Icons Height":"Window_Base._iconHeight","--Rolling States--":"","Rolling States":"false","Rolling States X":"rect.x + Window_Base._iconWidth + (this.textPadding() * 2)","Rolling States Y":"rect.y + this.textPadding() + Window_Base._iconHeight + this.lineHeight()","--Party Command Window--":"","Party Command X":"0","Party Command Y":"Graphics.boxHeight - this.windowHeight()","Party Command Width":"192","Party Command Height":"this.fittingHeight(this.numVisibleRows())","Party Command Rows":"Math.max(Math.ceil(this.maxItems() / this.maxCols()), 1)","Party Command Columns":"1","Party Command Visible Rows":"4","Party Command Item Width":"Math.floor((this.width - this.padding * 2 + this.spacing()) / this.maxCols() - this.spacing())","Party Command Item Height":"this.lineHeight()","Party Command Opacity":"255","Party Command Dim Window":"false","--Actor Command Window--":"","Actor Command X":"0","Actor Command Y":"Graphics.boxHeight - this.windowHeight()","Actor Command Width":"192","Actor Command Height":"this.fittingHeight(this.numVisibleRows())","Actor Command Rows":"Math.max(Math.ceil(this.maxItems() / this.maxCols()), 1)","Actor Command Columns":"1","Actor Command Visible Rows":"4","Actor Command Item Width":"Math.floor((this.width - this.padding * 2 + this.spacing()) / this.maxCols() - this.spacing())","Actor Command Item Height":"this.lineHeight()","Actor Command Close When Selecting":"false","Actor Command Opacity":"255","Actor Command Dim Window":"false","--Battle Skill Window--":"","Battle Skill X":"0","Battle Skill Y":"eval(Yanfly.Param.BECLowerWindows) ? Graphics.boxHeight - this._skillWindow.height : this._helpWindow.y + this._helpWindow.height","Battle Skill Width":"Graphics.boxWidth","Battle Skill Height":"eval(Yanfly.Param.BECLowerWindows) ? this._skillWindow.fittingHeight(eval(Yanfly.Param.BECWindowRows)) : this._statusWindow.y - (this._helpWindow.y + this._helpWindow.height)","Battle Skill Rows":"Math.max(Math.ceil(this.maxItems() / this.maxCols()), 1)","Battle Skill Columns":"2","Battle Skill Item Width":"Math.floor((this.width - this.padding * 2 + this.spacing()) / this.maxCols() - this.spacing())","Battle Skill Item Height":"this.lineHeight()","Battle Skill Opacity":"255","Battle Skill Dim Window":"false","--Battle Item Window--":"","Battle Item X":"0","Battle Item Y":"eval(Yanfly.Param.BECLowerWindows) ? Graphics.boxHeight - this._itemWindow.height : this._helpWindow.y + this._helpWindow.height","Battle Item Width":"Graphics.boxWidth","Battle Item Height":"eval(Yanfly.Param.BECLowerWindows) ? this._itemWindow.fittingHeight(eval(Yanfly.Param.BECWindowRows)) : this._statusWindow.y - (this._helpWindow.y + this._helpWindow.height)","Battle Item Rows":"Math.max(Math.ceil(this.maxItems() / this.maxCols()), 1)","Battle Item Columns":"2","Battle Item Item Width":"Math.floor((this.width - this.padding * 2 + this.spacing()) / this.maxCols() - this.spacing())","Battle Item Item Height":"this.lineHeight()","Battle Item Opacity":"255","Battle Item Dim Window":"false","--Help Window--":"","Help Window X":"0","Help Window Y":"0","Help Window Width":"Graphics.boxWidth","Help Window Height":"this._helpWindow.fittingHeight(2)","Help Window Opacity":"255","Help Window Dim Window":"false","--Battle Log Window--":"","Battle Log X":"0","Battle Log Y":"0","Battle Log Width":"Graphics.boxWidth","Battle Log Height":"this.fittingHeight(this.maxLines())","Battle Log Window Style":"false","Battle Log Window Opacity":"0","Battle Log Window Background Type":"0","--Battler Picture--":"","Show Battler Picture":"false","Always Show Battler Picture":"false","Show Battler Picture When Inputting":"true","Show Battler Picture When Targeted By Enemy":"false","Show Battler Picture When Targeted By Ally":"false","Show Battler Picture When Acting":"true","Battler Picture X":"(battleStatusWindow.x + battleStatusWindow.standardPadding() + rect.x) + (rect.width / 2) - (this.bitmap.width / 2)","Battler Picture Y":"battleStatusWindow.y - this.bitmap.height","--Frontview--":"","Frontview Animations On Top":"false","Prevent Frontview Sprite Move":"false","Frontview Actor Sprite X":"statusWindow.x + statusWindow.standardPadding() + rect.x + (rect.width / 2)","Frontview Actor Sprite Y":"statusWindow.y + statusWindow.standardPadding() + rect.y + (rect.height / 2) + (this.height / 2)","--Quick Settings--":"","Center Animations and Popups On Face":"false","Center Animations and Popups On Battler Pic":"false","DreamX Setup Suggestion":"false"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"YEP_WeaponAnimation","status":true,"description":"v1.05 This plugin allows you to go past the standard\nweapon images and even using custom images.","parameters":{"Image Filepath":"img/weapons/","Image Smoothing":"false","Default Motion":"swing"}},
{"name":"TYR_FollowerControl","status":true,"description":"v1.04  Allows greater control of party follower movement, balloon icons, animations, and transfers.","parameters":{}},
{"name":"SimpleLandVehicle","status":true,"description":"v1.2 Allows you to drive/ride a vehicle on land.","parameters":{"Vehicle Speed":"5","Encounters":"false","Touch Events":"false","Action Button Events":"false","Forbid Region ID":"0"}},
{"name":"DSE-AudioLagFix81","status":true,"description":"Audio Fix for RPGmaker MV (Ver 0.81)","parameters":{"Force HTML5 Audio":"false","Use Legacy Static SE":"","Max Loop Start":"","Debug":""}}
];

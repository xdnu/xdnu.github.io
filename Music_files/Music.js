// Created by iWeb 3.0 local-build-20210901

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="290" height="16" style="height: 16px; left: 106px; position: absolute; top: 322px; width: 290px; z-index: 1; "><param name="src" value="Media/My%20Way%20Def%20Tech.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="290" height="16" style="height: 16px; left: 106px; position: absolute; top: 322px; width: 290px; z-index: 1; "><param name="src" value="Media/My%20Way%20Def%20Tech.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="290" height="16" data="Media/My%20Way%20Def%20Tech.mp3" style="height: 16px; left: 106px; position: absolute; top: 322px; width: 290px; z-index: 1; "><param name="src" value="Media/My%20Way%20Def%20Tech.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Music_files/MusicMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}

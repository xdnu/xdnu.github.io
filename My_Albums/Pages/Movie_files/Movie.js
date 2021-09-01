// Created by iWeb 3.0 local-build-20210901

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="320" height="256" style="height: 256px; left: 190px; position: absolute; top: 17px; width: 320px; z-index: 1; "><param name="src" value="../../Media/skd267709sdc_320x240-104.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="320" height="256" style="height: 256px; left: 190px; position: absolute; top: 17px; width: 320px; z-index: 1; "><param name="src" value="Movie_files/skd267709sdc_320x240.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/skd267709sdc_320x240-104.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="320" height="256" data="../../Media/skd267709sdc_320x240-104.mov" style="height: 256px; left: 190px; position: absolute; top: 17px; width: 320px; z-index: 1; "><param name="src" value="../../Media/skd267709sdc_320x240-104.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Movie_files/MovieMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');fixupIECSS3Opacity('id4');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}

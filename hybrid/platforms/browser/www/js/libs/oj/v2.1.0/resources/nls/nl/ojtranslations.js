define({"oj-message":{fatal:"Fataal",error:"Fout",warning:"Waarschuwing",info:"Info",confirmation:"Bevestiging","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"De waarde heeft niet de verwachte notatie.",detail:"Voer een waarde in met de verwachte notatie.","plural-separator":", ",hint:{summary:"Voorbeeld: {exampleValue}",detail:"Voer een waarde in met dezelfde notatie als dit voorbeeld: '{exampleValue}'.","detail-plural":"Voer een waarde in met dezelfde notatie als deze voorbeelden: '{exampleValue}'."},
optionHint:{detail:"Een geaccepteerde waarde voor de optie '{propertyName}' is '{propertyValueValid}'.","detail-plural":"Geaccepteerde waarden voor de optie '{propertyName}' zijn '{propertyValueValid}'."},optionTypesMismatch:{summary:"Er is een waarde vereist voor de optie '{requiredPropertyName}' als de optie '{propertyName}' is ingesteld op '{propertyValue}'."},optionTypeInvalid:{summary:"Er is geen waarde van het verwachte type opgegeven voor de optie '{propertyName}'."},optionOutOfRange:{summary:"De waarde {propertyValue} is buiten het bereik voor de optie '{propertyName}'."},
optionValueInvalid:{summary:"Een ongeldige waarde, '{propertyValue}', is opgegeven voor de optie '{propertyName}'."},number:{decimalFormatMismatch:{summary:"'{value}' heeft niet de verwachte getalnotatie."},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'short' en 'long' worden niet ondersteund voor ontleding door de converter.",detail:"Wijzig component in readOnly. Met readOnly-velden wordt de ontleedfunctie van de converter niet aangeroepen."},currencyFormatMismatch:{summary:"'{value}' heeft niet de verwachte valutanotatie."},
percentFormatMismatch:{summary:"'{value}' heeft niet de verwachte percentagenotatie."}},datetime:{datetimeOutOfRange:{summary:"De waarde {value} is buiten het bereik voor '{propertyName}'.",detail:"Voer een waarde in tussen '{minValue}' en '{maxValue}'."},dateFormatMismatch:{summary:"'{value}' heeft niet de verwachte datumnotatie."},invalidTimeZoneID:{summary:"Ongeldige tijdzone-ID {timeZoneID} opgegeven"},nonExistingTime:{summary:"De ingevoerde tijd bestaat niet, omdat deze in de overgang naar zomertijd valt."},
missingTimeZoneData:{summary:"TimeZone-gegevens ontbreken. Roep de 'require' 'ojs/ojtimezonedata' aan om de TimeZone-gegevens te laden."},timeFormatMismatch:{summary:"'{value}' heeft niet de verwachte tijdnotatie."},datetimeFormatMismatch:{summary:"'{value}' heeft niet de verwachte datum- en tijdnotatie."},dateToWeekdayMismatch:{summary:"Dag '{date}' valt niet op een '{weekday}'.",detail:"Voer een weekdag in die overeenkomt met de datum."}}},"oj-validator":{length:{hint:{min:"Voer {min} of meer tekens in.",
max:"Voer {max} of minder tekens in.",inRange:"Voer {min} of meer tekens in, tot maximaal {max}.",exact:"Voer {length} tekens in."},messageDetail:{tooShort:"Voer {min} of meer tekens in, niet minder.",tooLong:"Voer {max} of minder tekens in, niet meer."},messageSummary:{tooShort:"Er zijn te weinig tekens.",tooLong:"Er zijn te veel tekens."}},range:{number:{hint:{min:"Voer een getal in dat groter is dan of gelijk is aan {min}.",max:"Voer een getal in dat kleiner is dan of gelijk is aan {max}.",inRange:"Voer een getal tussen {min} en {max} in."},
messageDetail:{rangeUnderflow:"Het getal moet groter dan of gelijk aan {min} zijn.",rangeOverflow:"Het getal moet kleiner dan of gelijk aan {max} zijn."},messageSummary:{rangeUnderflow:"Het getal is te laag.",rangeOverflow:"Het getal is te hoog."}},datetime:{hint:{min:"Voer een datum en tijd op of na {min} in.",max:"Voer een datum en tijd op of voor {max} in.",inRange:"Voer een datum en tijd tussen {min} en {max} in."},messageDetail:{rangeUnderflow:"De datum en tijd moeten op {min} of later zijn.",
rangeOverflow:"De datum en tijd moeten op {max} of eerder zijn."},messageSummary:{rangeUnderflow:"De datum en tijd is eerder dan de minimumdatum.",rangeOverflow:"De datum en tijd is later dan de maximumdatum."}}},restriction:{date:{messageSummary:"De datum {value} is van een inactief item.",messageDetail:"De datum {value} mag niet van een inactief item zijn."}},regExp:{summary:"De notatie is onjuist.",detail:"De waarde '{value}' moet overeenkomen met dit patroon: '{pattern}'"},required:{summary:"Waarde is vereist.",
detail:"U moet een waarde invoeren."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Vorige",nextText:"Volgende",currentText:"Vandaag",weekHeader:"Week",tooltipCalendar:"Datum selecteren",tooltipCalendarDisabled:"Datum selecteren inactief",weekText:"Week",datePicker:"Datumkiezer",inputHelp:"Druk op de pijl omlaag of pijl omhoog om de kalender te openen.",inputHelpBoth:"Druk op de pijl omlaag of pijl omhoog om de kalender te openen, en op Shift+pijl omlaag of Shift+pijl omhoog om de tijddropdown te openen.",
dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Tijd selecteren",tooltipTimeDisabled:"Tijd selecteren inactief",inputHelp:"Druk op de pijl omlaag of pijl omhoog om de tijddropdown te openen.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",
rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"De waarde moet overeenkomen met dit patroon: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"Volgende pagina",labelAccArrowPreviousPage:"Vorige pagina",tipArrowNextPage:"Volgende",tipArrowPreviousPage:"Vorige"},"oj-ojDataGrid":{accessibleSortAscending:"{id} gesorteerd in oplopende volgorde",accessibleSortDescending:"{id} gesorteerd in aflopende volgorde",accessibleActionableMode:"Naar actiemodus",
accessibleNavigationMode:"Ga naar de navigatiemodus. Druk op F2 om naar de bewerkmodus of actiemodus te gaan.",accessibleEditableMode:"Ga naar de bewerkmodus. Druk op Escape om het gegevensraster te verlaten.",accessibleSummaryExact:"Dit is een gegevensraster met {rownum} rijen en {colnum} kolommen.",accessibleSummaryEstimate:"Dit is een gegevensraster met een onbekend aantal rijen en kolommen.",accessibleSummaryExpanded:"Er zijn momenteel {num} rijen uitgevouwen.",accessibleRowExpanded:"Rij uitgevouwen",
accessibleRowCollapsed:"Rij samengevouwen",accessibleRowSelected:"Rij {row} geselecteerd",accessibleColumnSelected:"Kolom {column} geselecteerd",accessibleStateSelected:"geselecteerd",accessibleMultiCellSelected:"{num} cellen geselecteerd",accessibleRowContext:"Rij {index}",accessibleColumnContext:"Kolom {index}",accessibleRowHeaderContext:"Rijkoptekst {index}",accessibleColumnHeaderContext:"Kolomkoprij {index}",accessibleRowEndHeaderContext:"Koptekst rijeinde {index}",accessibleColumnEndHeaderContext:"Koptekst kolomeinde {index}",
accessibleLevelContext:"Niveau {level}",accessibleRangeSelectModeOn:"Modus voor toevoegen van geselecteerd cellenbereik aan",accessibleRangeSelectModeOff:"Modus voor toevoegen van geselecteerd cellenbereik uit",accessibleFirstRow:"U hebt de eerste rij bereikt.",accessibleLastRow:"U hebt de laatste rij bereikt.",accessibleFirstColumn:"U hebt de eerste kolom bereikt.",accessibleLastColumn:"U hebt de laatste kolom bereikt.",accessibleSelectionAffordanceTop:"Bovenste selectiegreep",accessibleSelectionAffordanceBottom:"Onderste selectiegreep",
msgFetchingData:"Gegevens worden opgehaald...",msgNoData:"Geen items om weer te geven",labelResize:"Grootte wijzigen",labelResizeWidth:"Breedte wijzigen",labelResizeHeight:"Hoogte wijzigen",labelSortRow:"Rij sorteren",labelSortRowAsc:"Rij oplopend sorteren",labelSortRowDsc:"Rij aflopend sorteren",labelSortCol:"Kolom sorteren",labelSortColAsc:"Kolom oplopend sorteren",labelSortColDsc:"Kolom aflopend sorteren",labelCut:"Knippen",labelPaste:"Plakken",labelEnableNonContiguous:"Niet-aaneengesloten selectie activeren",
labelDisableNonContiguous:"Niet-aaneengesloten selectie deactiveren",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"Niveau {level}",accessibleRowDescription:"Niveau {level}, rij {num} van {total}",accessibleRowExpanded:"Rij uitgevouwen",accessibleRowCollapsed:"Rij samengevouwen",accessibleStateExpanded:"uitgevouwen",accessibleStateCollapsed:"samengevouwen"},"oj-ojListView":{msgFetchingData:"Gegevens worden opgehaald...",msgNoData:"Geen items om weer te geven",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
accessibleReorderTouchInstructionText:"Dubbeltik en houd vast. Wacht op het geluid en sleep vervolgens om te herschikken.",accessibleReorderBeforeItem:"Vóór {item}",accessibleReorderAfterItem:"Na {item}",accessibleReorderInsideItem:"In {item}",labelCut:"Knippen",labelCopy:"Kopiëren",labelPaste:"Plakken",labelPasteBefore:"Plakken vóór",labelPasteAfter:"Plakken achter"},"oj-_ojLabel":{tooltipHelp:"Help",tooltipRequired:"Vereist"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",
rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Verlagen",tooltipIncrement:"Verhogen"},"oj-ojTable":{labelAccSelectionAffordanceTop:"Bovenste selectiegreep",labelAccSelectionAffordanceBottom:"Onderste selectiegreep",labelEnableNonContiguousSelection:"Niet-aaneengesloten selectie activeren",labelDisableNonContiguousSelection:"Niet-aaneengesloten selectie deactiveren",labelSelectRow:"Rij selecteren",labelEditRow:"Rij bewerken",labelSelectAndEditRow:"Rij selecteren en bewerken",
labelSelectColumn:"Kolom selecteren",labelSort:"Sorteren",labelSortAsc:"Oplopend sorteren",labelSortDsc:"Aflopend sorteren",msgFetchingData:"Gegevens worden opgehaald...",msgNoData:"Er zijn geen gegevens om weer te geven."},"oj-ojTabs":{labelCut:"Knippen",labelPasteBefore:"Plakken vóór",labelPasteAfter:"Plakken achter",labelRemove:"Verwijderen",labelReorder:"Opnieuw sorteren",removeCueText:"Verwijderbaar"},"oj-ojSelect":{searchField:"Zoekveld",noMatchesFound:"Geen treffers gevonden.",oneMatchesFound:"Eén match gevonden.",
moreMatchesFound:"{num} overeenkomsten gevonden"},"oj-ojSwitch":{SwitchON:"Aan",SwitchOFF:"Uit"},"oj-ojCombobox":{noMatchesFound:"Geen treffers gevonden."},"oj-ojInputSearch":{noMatchesFound:"Geen treffers gevonden."},"oj-ojTree":{stateLoading:"Bezig met laden...",labelNewNode:"Nieuwe node",labelMultiSelection:"Meerdere selecties",labelEdit:"Bewerken",labelCreate:"Maken",labelCut:"Knippen",labelCopy:"Kopiëren",labelPaste:"Plakken",labelRemove:"Verwijderen",labelRename:"Hernoemen",labelNoData:"Geen gegevens"},
"oj-ojPagingControl":{labelAccPaging:"Paginering",labelAccNavFirstPage:"Eerste pagina",labelAccNavLastPage:"Laatste pagina",labelAccNavNextPage:"Volgende pagina",labelAccNavPreviousPage:"Vorige pagina",labelAccNavPage:"Pagina",labelLoadMore:"Meer tonen...",labelLoadMoreMaxRows:"Maximumlimiet van {maxRows} rijen bereikt",labelNavInputPage:"Pagina",labelNavInputPageMax:"van {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"van",msgItemRangeOfAtLeast:"van ten minste",
msgItemRangeOfApprox:"van ongeveer",msgItemRangeItems:"items",tipNavInputPage:"Ga naar pagina",tipNavPageLink:"Ga naar pagina {pageNum}",tipNavNextPage:"Volgende",tipNavPreviousPage:"Vorige",tipNavFirstPage:"Eerste",tipNavLastPage:"Laatste",pageInvalid:{summary:"De ingevoerde paginawaarde is ongeldig.",detail:"Voer een waarde groter dan 0 in."},maxPageLinksInvalid:{summary:"De waarde voor maxPageLinks is ongeldig.",detail:"Voer een waarde groter dan 4 in."}},"oj-ojMasonryLayout":{labelCut:"Knippen",
labelPasteBefore:"Plakken vóór",labelPasteAfter:"Plakken achter"},"oj-panel":{labelAccButtonExpand:"Uitvouwen",labelAccButtonCollapse:"Samenvouwen",labelAccButtonRemove:"Verwijderen"},"oj-ojChart":{labelDefaultGroupName:"Groep {0}",labelSeries:"Reeks",labelGroup:"Groep",labelDate:"Datum",labelValue:"Waarde",labelTargetValue:"Doel",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Percentage",labelLow:"Laag",labelHigh:"Hoog",labelOpen:"Openen",labelClose:"Sluiten",labelVolume:"Volume",labelQ1:"Q1",
labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min.",labelMax:"Max.",labelOther:"Overig",tooltipPan:"Schuiven",tooltipSelect:"Selecteren marquee",tooltipZoom:"Zoomen marquee",componentName:"Grafiek"},"oj-dvtBaseGauge":{componentName:"Datameter"},"oj-ojDiagram":{promotedLink:"{0} koppeling",promotedLinks:"{0} koppelingen",promotedLinkAriaDesc:"Indirect",componentName:"Diagram"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} dagen",accessibleDurationHours:"{0} uur",accessibleTaskInfo:"Begintijd is {0}, eindtijd is {1} en duur is {2}.",
accessibleMilestoneInfo:"Tijd is {0}.",accessibleRowInfo:"Rij {0}"},"oj-ojLegend":{componentName:"Legenda"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Overig",labelGroup:"Groep",labelSize:"Grootte",labelAdditionalData:"Aanvullende gegevens",componentName:"NBox"},"oj-ojPictoChart":{componentName:"Afbeeldingsgrafiek"},"oj-ojSparkChart":{componentName:"Grafiek"},"oj-ojSunburst":{labelColor:"Kleur",labelSize:"Grootte",componentName:"Ringdiagram"},"oj-ojTagCloud":{componentName:"Tagwolk"},"oj-ojThematicMap":{componentName:"Thematische kaart"},
"oj-ojTimeAxis":{componentName:"Tijdas"},"oj-ojTimeline":{componentName:"Tijdlijn",labelSeries:"Reeks",tooltipZoomIn:"Inzoomen",tooltipZoomOut:"Uitzoomen"},"oj-ojTreemap":{labelColor:"Kleur",labelSize:"Grootte",tooltipIsolate:"Isoleren",tooltipRestore:"Herstellen",componentName:"Boomstructuurkaart"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"mln",labelScalingSuffixBillion:"mld",labelScalingSuffixTrillion:"bln",labelScalingSuffixQuadrillion:"bld",labelInvalidData:"Ongeldige gegevens",
labelNoData:"Er zijn geen gegevens om weer te geven.",labelClearSelection:"Selectie wissen",labelDataVisualization:"Visualisatie van gegevens",stateSelected:"Geselecteerd",stateUnselected:"Niet geselecteerd",stateMaximized:"Gemaximaliseerd",stateMinimized:"Geminimaliseerd",stateExpanded:"Uitgevouwen",stateCollapsed:"Samengevouwen",stateIsolated:"Geïsoleerd",stateHidden:"Verborgen",stateVisible:"Zichtbaar",stateDrillable:"Inzoombaar",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} van {1}"},"oj-ojNavigationList":{defaultRootLabel:"Navigatielijst",
hierMenuBtnLabel:"Knop hiërarchisch menu",selectedLabel:"geselecteerd",previousIcon:"Vorige",msgFetchingData:"Gegevens worden opgehaald...",msgNoData:"Geen items om weer te geven"},"oj-ojSlider":{noValue:"ojSlider heeft geen waarde.",maxMin:"Max. mag niet minder zijn dan Min.",valueRange:"Waarde moet binnen het bereik tussen Min. en Max. liggen.",optionNum:"{option} optie is geen getal.",invalidStep:"Stap is ongeldig. Stap moet > 0 zijn."},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Pop-up wordt geopend. Druk op F6 om tussen de pop-up en het bijbehorende besturingselement te navigeren.",
ariaLiveRegionInitialFocusNone:"Pop-up is geopend. Druk op F6 om tussen de pop-up en het bijbehorende besturingselement te navigeren.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Pop-up wordt geopend. De pop-up kan worden gesloten door naar de laatste koppeling in de pop-up te navigeren.",ariaLiveRegionInitialFocusNoneTouch:"Pop-up is geopend. Navigeer naar de volgende koppeling om de pop-up de focus te geven.",ariaFocusSkipLink:"Dubbeltik om naar de open pop-up te navigeren.",ariaCloseSkipLink:"Dubbeltik om de open pop-up te sluiten."},
"oj-pullToRefresh":{ariaRefreshLink:"Activeer de koppeling om de inhoud te vernieuwen.",ariaRefreshingLink:"Inhoud wordt vernieuwd.",ariaRefreshCompleteLink:"Vernieuwen is voltooid"},"oj-ojIndexer":{indexerOthers:"#",ariaDisabledLabel:"Geen overeenkomende groepskoptekst",ariaOthersLabel:"Getal",ariaInBetweenText:"Tussen {first} en {second}",ariaKeyboardInstructionText:"Druk op Enter om waarde te selecteren.",ariaTouchInstructionText:"Dubbeltik en houd vast om gebarenmodus te activeren. Sleep vervolgens omhoog of omlaag om waarde aan te passen."},
"oj-ojMenu":{labelCancel:"Annuleren"}});
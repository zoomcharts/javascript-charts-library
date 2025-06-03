/** TypeScript definition file for ZoomCharts 1.21.5 */

declare module ZoomCharts.Configuration {
    /* tslint:disable */

    export abstract class BaseApi {
        /** Adds the given data to whatever data the chart has currently loaded. The chart will automatically be updated
        to display this new data if it falls within the currently visible bounds. */
        public addData(data: BaseDataObjectBase, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        /** 
        @deprecated use settings.parentChart instead. */
        public addSubchartContainer(container: HTMLElement): void;
        public back(): this;
        public clearHistory(): this;
        /** Applies one of the built-in themes to the chart. This is an alternative to calling 
        `updateSettings({ theme: ZoomCharts.$this.themes.dark })`. */
        public customize(
            /** The name of the theme to be applied, must be one of the values defined in the `$this.themes` static property. */
            name: string): this;
        /** Launches a file download that contains an image or the data of the current state of the chart. 
        
        Note that in some browsers calling this method will send the data to a proxy. When handling sensitive data you should install the proxy 
        on your own server, see `advanced.exportProxyURL` setting. */
        public export(
            /** The format in which the data will be exported. */
            type: "png" | "jpg" | "pdf" | "csv" | "xlsx", 
            /** Specifies the dimensions for the image formats. */
            dimensions?: BaseExportDimensions, 
            /** Specifies if the resulting image should have transparent background. This setting is only valid for `png` image format. Default is `false`.
            
            Note that if `area.style.fillColor` is set, this will have no effect. */
            transparent?: boolean, 
            /** Specifies the fileName to be used, excluding fileExtension */
            fileName?: string): void;
        /** Saves the current chart state as a data-URI. 
        
        If image type is specified, the URI can be used as the image source in `<img src="">`. 
        
        Note that some output settings might require sending the data to a proxy. When handling sensitive data you should install the proxy 
        on your own server, see `advanced.exportProxyURL` setting. */
        public exportAsString(
            /** The format in which the data will be exported. */
            type: "png" | "jpg" | "pdf" | "csv" | "xlsx", 
            /** The callback that will be invoked once the result is generated. */
            callback: (
                /** The data-uri that contains the generated image or data file. */
                dataUri: string, 
                /** The mime type of the generated file. */
                mimeType: string, 
                /** The extension of the generated file. */
                extension: string) => void, 
            /** Specifies the dimensions for the image formats. */
            dimensions?: BaseExportDimensions, 
            /** Specifies if the resulting image should have transparent background. This setting is only valid for `png` image format. Default is `false`.
            
            Note that if `area.style.fillColor` is set, this will have no effect. */
            transparent?: boolean): void;
        /** Returns the dimensions for the image exported with `exportImageAsString`.
        @deprecated use `exportImageGetDimensions` instead */
        public exportGetDimensions(dimensions: BaseExportDimensions): {
                width: number;
                height: number;
                scale: number;
                chartWidth: number;
                chartHeight: number;
            };
        /** Saves the current chart state as an image. 
        
        Note that this method does not support custom DPI setting, for that `exportAsString` method has to be used.
        @deprecated use `exportAsString` instead. */
        public exportImageAsString(type: "png" | "jpg" | "pdf" | "csv" | "xlsx", dimensions: BaseExportDimensions, transparent: boolean): string;
        /** Returns the dimensions for the image exported with `exportImageAsString`. */
        public exportImageGetDimensions(dimensions: BaseExportDimensions): {
                width: number;
                height: number;
                scale: number;
                chartWidth: number;
                chartHeight: number;
            };
        /** Gets or sets the fullscreen state of the chart. */
        public fullscreen(
            /** specify `true` or `false` to set the state, omit the value to get the current state. */
            isFullscreen?: boolean): boolean;
        public home(): boolean;
        /** Removes an event listener that was added by a call to `on` or by specifying it in settings.
        Note that the listener must be the exact same reference, which means that anonymous functions should not be used in call to `on`. */
        public off(
            /** the type of the event. Please see the documentation for `on` about valid values. */
            name: string, listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): boolean;
        /** Adds event listener. */
        public on(
            /** The type of the event for which the listener will be added. See method overloads for valid values. */
            name: string, 
            /** The callback function. It receives two arguments - the mouse event data and a separate object containing chart specific information. */
            listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for when the current view has changed (usually after panning and navigation). */
        public on(name: "chartUpdate", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for the mouse click (or touch tap) event. */
        public on(name: "click", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for the mouse double click (or touch double tap) event. */
        public on(name: "doubleClick", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for the mouse click (or touch tap) event. */
        public on(name: "error", listener: (
                /** An empty mouse event. */
                event: BaseMouseEvent, args: BaseChartErrorEventArguments) => void): void;
        /** Adds an event listener for when the currently hovered item has changed. */
        public on(name: "hoverChange", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for pointer down event. */
        public on(name: "pointerDown", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for pointer down event. */
        public on(name: "dataUpdated", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for when chart placement on screen changes. Note that this is called on every animation frame. */
        public on(name: "positionChange", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for the mouse right click (or touch longpress) event. */
        public on(name: "rightClick", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for when the currently selected item or items have changed. */
        public on(name: "selectionChange", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Adds an event listener for when the settings are updated through the API. */
        public on(name: "settingsChange", listener: (event: BaseMouseEvent, args: BaseChartSettingsChangeEventArguments) => void): void;
        /** Adds an event listener for the mouse triple click (or touch triple tap) event. */
        public on(name: "tripleClick", listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;
        /** Does immediate repaint. Use to sync updates between multiple charts. */
        public paintNow(force?: boolean): this;
        public profiler(): BaseProfiler;
        /** Clears data cache and loads new data. The current view is preserved. */
        public reloadData(sourceId?: string): void;
        /** Removes chart from DOM. This method is automatically called when you create a new chart within the same container element.
        
        This method should always be called when the chart HTML element is removed as otherwise there might be additional resources such
        as event handlers remaining that will prevent the browser from properly releasing memory. */
        public remove(): void;
        /** Replaces the data already in the data cache with the given values. */
        public replaceData(data: BaseDataObjectBase, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        /** Updates the chart settings but instead of merging some settings that are arrays or dictionaries (such as `data`)
        these collections are replaced completely. For example, this allows removal of series or value axis within TimeChart. */
        public replaceSettings(changes: BaseSettings): this;
        public restoreState(state: string, animate?: boolean): void;
        /** Decrements the suspend counter that was set using `suspendPaint()` method.
        
        This method also automatically schedules an async repaint. */
        public resumePaint(): void;
        /** Saves the current chart state as an image.
        @deprecated use `exportAsString` instead */
        public saveAsImage(type: "png" | "jpg" | "pdf" | "csv" | "xlsx", dimensions: BaseExportDimensions, transparent: boolean): string;
        public saveState(): string;
        /** Suspends the animation of the chart until `resumePaint()` is called.
        
        This should be used when the chart element is hidden from the user to conserve browser resources.
        
        Note that if `suspendPaint()` is called multiple time then `resumePaint()` has to be called the same number of times. */
        public suspendPaint(): void;
        /** Gets the name of the chart the JavaScript object references. For example 'PieChart' or 'TimeChart'. This field is read-only. */
        public typeName: string;
        /** Re-evaluate data filters on next paint. */
        public updateFilters(): void;
        /** Updates the chart settings. Only the settings that have to be changed should be passed. Note that some arrays
        and dictionaries (such as `data`) are merged by the ID values - if instead they should be replaced, use
        [`replaceSettings()`](#doc_replaceSettings) method. */
        public updateSettings(changes: BaseSettings): this;
        /** Call when the container size has been changed to update the chart. */
        public updateSize(): this;
        /** Re-evaluate style for all objects on next paint. */
        public updateStyle(): void;
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface BaseChartErrorEventArguments extends BaseChartEventArguments {
        /** Any additional arguments that were passed to the error handler. */
        arg: any;
        /** The error message. */
        message: string;
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface BaseChartEventArguments {
        /** The chart object for which the event has been raised. */
        chart: BaseApi;
        clickCredits?: boolean;
        credits?: {
            url: string;
            urlTarget: string;
        };
        origin: string;
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface BaseChartSettingsChangeEventArguments extends BaseChartEventArguments {
        changes?: BaseSettings;
    }
    export interface BaseDataErrorResponse extends BaseDataObjectBase {
        /** If the data could not be retrieved, this field can be used to instruct the chart to cancel the data request and log an error.
        Note that in most cases this field should not be used in favor of returning the correct HTTP status code (such as 404 or 500) so that
        the browser and any proxies do not cache the response. */
        error?: string;
    }
    export interface BaseDataObjectBase {
        /** Store any additional data values within this field. Although it is possible to extend the data object itself with additional fields 
        it is not recommended to do so because a future ZoomCharts version could introduce a known parameter with the same name thus changing the
        behavior of an existing chart. */
        extra?: any;
    }
    export interface BaseExportDimensions {
        /** Specifies the DPI setting used to calculate the pixel size if `unit` is specified as `mm`.
        
        Note that because of browser API limits the metadata of the resulting image will always specify `DPI=96` even
        though the pixel size will be calculated correctly. */
        dpi?: number;
        /** Specifies the width of the resulting image. If not given, the current width of the chart element
        is used instead.
        
        If the `width` is also specified but the aspect ratio is different from the chart, the image will be
        aligned in the top-left corner. */
        height?: number;
        /** Specifies a scale factor to the resulting image. A value of `2` will result in both the `width`
        and `height` being multiplied by `2`. */
        scaling?: number;
        /** Specifies the unit in which the `width` and `height` values are given. */
        unit?: "mm" | "px";
        /** Specifies the width of the resulting image. If not given, the current width of the chart element
        is used instead. 
        
        If the `height` is also specified but the aspect ratio is different from the chart, the image will be
        aligned in the top-left corner. */
        width?: number;
    }
    export interface BaseLabel {
        hheight: number;
        hwidth: number;
        /** The style settings used to render this label. */
        style: BaseSettingsLabelStyle;
        /** The text the label renders. This property overrides the text specified in the style settings. */
        text: string;
        visible: boolean;
    }
    /** Represents a single pointer. On multitouch, separate event for each pointer will be fired. */
    export interface BaseMouseEvent {
        altKey: boolean;
        changedPointerCount: number;
        consumed: boolean;
        ctrlKey: boolean;
        cursor: "default" | "help" | "move" | "pointer" | "progress" | "text" | "wait" | "e-resize" | "ne-resize" | "nw-resize" | "n-resize" | "se-resize" | "sw-resize" | "s-resize" | "w-resize" | "ns-resize" | "crosshair";
        defaultPrevented: boolean;
        distance(p: {
                x: number;
                y: number;
            }): number;
        dx: number;
        dy: number;
        identifier: string;
        isRightMB: boolean;
        /** Verifies if the original event described by this instance is within a specified distance of the given position. */
        isWithinDistance(
            /** The mouse event/pointer to which this instance is compered */
            current: {
                pageX: number;
                pageY: number;
                timeStamp: number;
            }, 
            /** The distance, in pixels, non-inclusive, below which the method will return positive */
            dist: number, 
            /** Time, in milliseconds. If specified, also verifies that the original event did not occur too long ago. */
            maxAge?: number): boolean;
        metaKey: boolean;
        pageX: number;
        pageY: number;
        pressed: boolean;
        preventDefault(): void;
        shiftKey: boolean;
        /** only on up event */
        swipeDown: boolean;
        /** only on up event */
        swipeLeft: boolean;
        /** only on up event */
        swipeRight: boolean;
        swipeSpeed: number;
        /** only on up event */
        swipeUp: boolean;
        target: HTMLElement;
        timeStamp: number;
        touch: boolean;
        vx: number;
        vy: number;
        wheelx: number;
        wheely: number;
        x: number;
        y: number;
    }
    export interface BaseProfiler {
        hasPendingRequests(): boolean;
        measureFps(measureFpsIters: number, measureFpsCallback: (fps: number, iterations: number, time: number) => void): boolean;
    }
    export interface BaseSettings {
        advanced?: BaseSettingsAdvanced;
        /** Chart area related settings. */
        area?: BaseSettingsArea;
        /** The URL root where the ZoomCharts library and assets are located. For example, if the base.css file is available at
        'http://server/css/zoomcharts/zc.css' then this value should be set to 'http://server/css/zoomcharts/'.
        Note that the library will try to determine its location automatically by searching the included script tags.
        So this property can be skipped if the assets folder is located next to 'zoomcharts.js' file on the server. */
        assetsUrlBase?: string;
        callbacks?: BaseSettingsCallbacks;
        /** Element of the page where the chart will be inserted. Any HTML element should work, for example you can use a `<div>`. 
        
        Any contents of the element will be cleared - this behavior can be used to specify a loading message as the initial content,
        for example `<div>Chart is being initialized...</div>`.
        
        Note that a single element can host only one chart. If the same container is given to another chart, the previous chart will
        be automatically disposed.
        
        Unless `parentChart` is specified, the value of the property is mandatory and can only be specified while creating the chart, 
        not with `updateSettings`. The value can be either an ID of an existing element or a reference to a DOM element. */
        container?: string | HTMLElement;
        /** Settings for displaying chart credits. Use it as a reference to additional data sources if necessery.
        
        ![Chart including credits](images/settings-credits.png)
        
        Note that even if credits enabled on page load, it's possible to hide on exported images. */
        credits?: BaseSettingsCredits;
        /** Settings used to load data into chart. Customise preferred data source feeding methods.
        You can use one of these options: url, data function, preloaded data. */
        data?: Array<BaseSettingsData>;
        /** The events used to handle user interaction with UI elements. */
        events?: BaseSettingsEvents<BaseChartEventArguments, BaseChartEventArguments>;
        /** Customise chart resize handles or animation duration settings. */
        interaction?: BaseSettingsInteraction;
        legend?: BaseSettingsLegend;
        /** Localizeable strings including export type options and useful default buttons used for chart interaction.
        Buttons like to navigate back, set the chart on full screen and others. */
        localization?: BaseSettingsLocalization;
        /** The parent chart within which the new chart will be rendered. If this property is specified, `container` cannot be
        specified.
        
        Use `area.left`, `area.top`, `area.width` and `area.height` settings to position the subchart within parent chart. */
        parentChart?: BaseApi;
        /** Theme to apply. You can either use this to share configuration objects between multiple charts or use one of the predefined
        themes. */
        theme?: BaseSettings;
        /** The chart's main title. */
        title?: BaseSettingsTitle;
        /** Adjustable settings to manage default and custom toolbar items, as well as toolbar overall appearance. */
        toolbar?: BaseSettingsToolbar;
    }
    export interface BaseSettingsAdvanced {
        /** List of assets to load from assets directory. This should be used to load CSS of JS files that
        are required for the chart to work.
        
        If `required` is specified, it can be used to determine at runtime if the file has to be included.
        For example, `zc.css` is only included if the page does not already defines the class `.DVSL-suppress-default-styles { color: #abc }`
        (note that the `color: #abc` rule has to be defined since that rule is verified and not the class as a whole).
        
        Note that in order to support older browsers such as Android 4.1, it is required for any `.css` asset
        to define the `required` delegate that can be used to verify if the asset has been loaded. */
        assets?: Array<string | {
                    url?: string;
                    /** a delegate that should return `true` if the assets has to be loaded and `false` if it can be skipped. */
                    required?: () => boolean;
                }>;
        /** Specifies if the image requests issued by the chart are issued with `crossOrigin: anonymous` attribute.
        
        Setting this to `true` enables using of images hosted on other servers for chart export. However it requires
        that all image resources used provide `Access-Control-Allow-Origin` header in the response.
        
        Note that currently the chart only uses this header when requesting images. It is not used when requesting
        other assets like scripts or stylesheets. */
        crossOriginHeader?: "anonymous" | "use-credentials";
        /** Specifies a delegate that provides the data for the CSV and Excel export options. If this is specified the
        chart will enable CSV and Excel export even if by default these options are not available. For charts that provide
        the data export by default, the function receives the default data set and can convert that. */
        dataExportFunction?: (
            /** The default data set if the chart supports data export. */
            data: Array<Array<string | number | Date | boolean>>, 
            /** The callback that has to be called once the data is available. */
            callback: (data: Array<Array<string | number | Date | boolean>>) => void) => void;
        /** The class to use for making data requests. */
        dataRequestClass?: string;
        defaultExportFileName?: string;
        /** The page size in milimeters for the exported PDF documents. For A4 use `[210, 297]` (this is the default),
        for letter size use `[215.9, 279.4]`. The first number is the width, the second is the height. */
        exportPdfSize?: [number, number];
        /** URL for export proxy requests. To host the service on your own server, please visit <https://github.com/zoomcharts/proxy-export-dotnet/>. */
        exportProxyURL?: string;
        /** Enables high resolution rendering on high DPI screens. As performance is varied across different browsers, disable this to
        improve the performance of your application. 
        
        This setting can either be set to `false` to disable the scaling, `true` to render according to the browser DPI setting
        and a number to force a constant scale, ignoring browser DPI settings. */
        highDPI?: number | boolean;
        /** Specifies a delegate to perform additional rendering during image
        export operations. */
        imageExportRenderingFunction?: (context: CanvasRenderingContext2D, width: number, height: number) => void;
        /** Whether to store entire label into bitmap. Use it to improve the performance of your application. */
        labelCache?: boolean;
        /** Whether to store labels that are rendered rotated in the cache. */
        labelCacheRotated?: boolean;
        /** Whether to show verbose logging. */
        logging?: boolean;
        /** Maximum height in pixels of the canvas object.
        
        When the height exceeds this value, the canvas is scaled up to match the required resolution. For example, if the maximum height is
        set to 4096px but the container height is 5000px, the canvas will be rendered at 2500px height with the scale factor of 2. */
        maxCanvasHeight?: number;
        /** Maximum width in pixels of the canvas object.
        
        When the width exceeds this value, the canvas is scaled up to match the required resolution. For example, if the maximum width is
        set to 4096px but the container width is 5000px, the canvas will be rendered at 2500px width with the scale factor of 2. */
        maxCanvasWidth?: number;
        /** Pointer related settings. */
        pointer?: BaseSettingsAdvancedPointer;
        /** Whether to show frames per second on the chart. */
        showFPS?: boolean;
        /** Whether to show the current timestamp on the chart. Use only for debugging. */
        showTimestamp?: boolean;
        /** Whether to show the trail of each touch pointer and also display pointers that are no longer active. 
        For this setting to have effect, `showTouches` must be `true`. */
        showTouchTrail?: boolean;
        /** Whether to use debugging option to paint pointer trails on screen. */
        showTouches?: boolean;
        /** If true, will always escape strings before they are used in
        innerHTML. For example, this could be useful if user input is used
        in a contentsFunction to avoid XSS possibilities.
        
        Note if true, then HTML cannot be provided as strings in
        contentsFunction settings. Instead DOM objects must be returned
        directly. */
        strictEscaping?: boolean;
        /** Miscellaneous style settings. */
        style?: BaseSettingsAdvancedStyle;
        /** CSS class for current theme. Used to reference chart container in CSS files. */
        themeCSSClass?: string;
        /** Whether to use requestAnimationFrame for requested paint instead of setTimeout. */
        useAnimationFrame?: boolean;
    }
    export interface BaseSettingsAdvancedPointer {
        /** Pixels pointer can move around and still be registered as a click. */
        clickSensitivity?: number;
        /** Pixels pointer can move around and still be registered as double click. */
        doubleClickSensitivity?: number;
        /** Maximum time in ms between clicks to register a double click.
        Also controls the maximum amount of time that can pass between a
        mouse down and mouse up and still qualify as a click.
        
        Special values:
        null - Entirely disables double and triple click; all clicks
        count as single.
        undefined - Same as null.
        0 - Entirely disables clicking in general; all mouse down and up
        events are registered as just mouse down and mouse up. */
        doubleClickTimeout?: number;
        /** The distance in pixels the pointer is allowed to be moved before the long-press event is cancelled. */
        longPressSensitivity?: number;
        /** Time in ms the pointer has to be hold to register a long press (an alternative to clicking the right mouse button). */
        longPressTimeout?: number;
        /** Specifies if the mouse wheel is only captured when the chart has focus. Setting this to `true` will require that the
        user first clicks the chart area. */
        mouseWheelRequiresFocus?: boolean;
        /** If enabled, normal click event is not sent when user performs a double click. A not so nice side effect is that any on click
        actions are delayed by the double click timeout. Set to false if you are not relying on double click events. */
        noClickOnDoubleClick?: boolean;
        /** Specifies if the chart container is scrolled into view once the chart is clicked.
        
        Note that the scroll happens on a click, if the pointer is used to for example, drag
        the chart, it will not scroll into view so that the user interaction works properly. */
        scrollIntoView?: boolean;
        /** Time window to use for pointer speed estimation. */
        speedAveragingPeriod?: number;
        /** Maximum time in ms between double click and triple click to register a triple click.
        Special values:
        null -- Use the same length as doubleClickTimeout
        undefined -- Same as null. */
        tripleClickTimeout?: number;
    }
    export interface BaseSettingsAdvancedStyle {
        /** Loading arc animation style */
        loadingArcStyle?: {
            lineColor?: string;
            lineWidth?: number;
            /** Specifies the location of the loading indicator and the status message as well. */
            location?: "corner" | "center" | "hidden";
            /** Loading arc radius. */
            r?: number;
        };
        /** The background that is drawn under the message. The box includes the loading indicator as well.
        
        Note that the background is not drawn if the loading indicator is shown without this background. */
        messageBackgroundStyle?: BaseSettingsAdvancedStyleMessageBackground;
        /** Message text. Note that the text position is taken from `loadingArcStyle.location`. */
        messageTextStyle?: BaseSettingsTextStyle;
    }
    export interface BaseSettingsAdvancedStyleMessageBackground extends BaseSettingsBackgroundStyle {
        /** The inner padding of the background box. */
        padding?: number;
    }
    export interface BaseSettingsArea {
        /** Height of the chart. If undefined the chart height will adapt to container element. */
        height?: number;
        /** The horizontal position of the chart. This setting only applies when this chart is nested within another by using `parentChart` setting. */
        left?: number;
        /** The maximum chart height. Chart will not resize below this. */
        maxHeight?: number;
        /** The maximum chart width. The chart will not resize below this */
        maxWidth?: number;
        /** The minimum chart height. Chart will not resize below this. */
        minHeight?: number;
        /** The minimum chart width. The chart will not resize below this */
        minWidth?: number;
        /** Area style. */
        style?: BaseSettingsAreaStyle;
        /** The vertical position of the chart. This setting only applies when this chart is nested within another by using `parentChart` setting. */
        top?: number;
        /** Width of the chart. If undefined the chart width will adapt to container element. */
        width?: number;
    }
    export interface BaseSettingsAreaStyle {
        /** Background fill color of chart area */
        fillColor?: string;
        /** Background image of  chart area. */
        image?: string;
        /** The foreground fill color of the chart area. `rgba()` with alpha transparency should be used */
        overlayColor?: string;
    }
    export interface BaseSettingsBackgroundStyle extends BaseSettingsLineStyle, BaseSettingsBackgroundStyleBase {
    }
    export interface BaseSettingsBackgroundStyleBase {
        fillColor?: string | CanvasGradient;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }
    export interface BaseSettingsCallbacks {
        renderFailed?: (err: any) => void;
        renderFinish?: () => void;
        renderStart?: () => void;
    }
    export interface BaseSettingsChartPanel {
        /** Panel alignment */
        align?: "left" | "right" | "top" | "bottom" | "center" | "middle" | "fill";
        /** Whether allow packing over other panels */
        floating?: boolean;
        /** The location of the panel */
        location?: "outside" | "inside" | "external";
        /** Margin around the panel */
        margin?: number;
        /** Panel side */
        side?: "top" | "bottom" | "left" | "right";
    }
    export interface BaseSettingsCredits {
        /** Enable/disable chart credits. Note that it does not affect exported image. */
        enabled?: boolean;
        /** Whether to render credits on the exported image. Note that it does not affect chart. */
        enabledOnExport?: boolean;
        /** URL of credits image. */
        image?: string;
        /** The URL of the credits image that will be used for the export. By default the same image is used for both export and displaying on the screen. */
        imageExport?: string;
        /** Image scaling. Use to embed higher resolution images. */
        imageScaling?: number;
        /** Specifies the image location */
        location?: "inside" | "outside";
        /** URL to open on click. */
        url?: string;
        /** The name of the frame that will be used to open the URL. */
        urlTarget?: string;
    }
    export interface BaseSettingsData {
        /** Data loading format. Currently most charts only support JSON. */
        format?: "JSON" | "GeoJSON";
        /** Data id used for series to reference specific data source. */
        id?: string;
        /** Max number of parallel data requests to issue. More requests will result in faster loading, but might put heavy load on server. */
        numberOfParallelRequests?: number;
        /** Delegate that can be used to process data returned by the server for the HTTP request issued by the chart. */
        postprocessorFunction?: (
            /** The raw data received from the server. */
            data: string) => string;
        /** Provides the ability to embed chart data directly into the chart configuration.
        
        This data can be complete or act as the initial data where the rest will be requested dynamically using
        `url` or `dataFunction`. */
        preloaded?: BaseDataErrorResponse;
        /** Timeout in milliseconds for data requests. This timeout only applies to HTTP requests issued by the chart directly. */
        requestTimeout?: number;
        /** URL that is used to load data */
        url?: string;
        /** List of extra parameters to pass with data URL. */
        urlParameters?: Array<{
                /** Parameter name. */
                name?: string;
                /** Parameter value. */
                value?: string;
            }>;
    }
    export interface BaseSettingsEvents<TArguments extends BaseChartEventArguments, TClickArguments extends BaseChartEventArguments> {
        /** Function called on pointer down. 
        Function called on pointer up. 
        Function called when pointer drag has happened. 
        Function called when mouse pointer is moved. 
        Function called when data is loaded/added/replaced/removed. 
        Time to wait after last action before firing onChartUpdate event. */
        chartUpdateDelay?: number;
        /** Function called when whenever current view has changed. Usually after panning and navigation. Use to update any linked views.
        Note that this is also fired after chart initialization and API methods. Use args.origin field to determine event's origin. */
        onChartUpdate?: (
            /** An empty mouse event. */
            event: BaseMouseEvent, args: TArguments) => void;
        /** Function called when user clicks on chart. */
        onClick?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: TClickArguments) => void;
        /** Function called when user double clicks on chart. */
        onDoubleClick?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: TClickArguments) => void;
        /** Function called when error occurs, default behavior is log to console. */
        onError?: (
            /** The mouse event that was the cause of the error. */
            event: BaseMouseEvent, args: BaseChartErrorEventArguments) => void;
        /** Function called when object pointer is on changes. */
        onHoverChange?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: TArguments) => void;
        /** Function called when lasso is changed */
        onLassoChange?: (
            /** The mouse event that caused the event (if any) */
            event: BaseMouseEvent, args: TArguments) => void;
        /** Function called when user long presses on chart. */
        onLongPress?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: TClickArguments) => void;
        /** Function called whenever chart placement on screen changes. Note that this is called on every animation frame and is intended
        for painting overlays only. */
        onPositionChange?: (
            /** The mouse event that caused the event (if any) */
            event: BaseMouseEvent, args: TArguments) => void;
        /** Function called when user right clicks on chart. */
        onRightClick?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: TClickArguments) => void;
        /** Function called when selected slices has changed. */
        onSelectionChange?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: TArguments) => void;
        /** Function called when settings are changed. */
        onSettingsChange?: (
            /** An empty mouse event. */
            event: BaseMouseEvent, args: BaseChartSettingsChangeEventArguments) => void;
        /** Function called when user triple clicks on chart. Use it for custom function call. */
        onTripleClick?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: TClickArguments) => void;
    }
    export interface BaseSettingsInteraction {
        /** Controls chart resize handles.
        
        It's a horizontal line right below any chart to handle whole chart resizes by small steps.
        
        Note that the full screen button used as a main alternative to get a full screen by one click. */
        resizing?: BaseSettingsResizer;
    }
    export interface BaseSettingsLabelStyle {
        /** Text alignment. */
        align?: "center" | "right" | "left";
        /** The angle at which the label are rotated */
        angle?: number;
        /** Ratio between label sizes in different dimensions */
        aspectRatio?: number;
        /** Background style including fill color. */
        backgroundStyle?: BaseSettingsBackgroundStyle;
        /** Radius of item border. Similar to CSS border radius property. Zero radius will show a rectangle */
        borderRadius?: number;
        /** Extra data associated with the label */
        extra?: any;
        forceNoWrap?: boolean;
        /** Label image. */
        image?: string;
        /** Slicing to use tiled images. Array of 4 values: [left, top, width, height] */
        imageSlicing?: [number, number, number, number];
        /** Vertical space between the lines of text. In multiples of text line height. */
        lineSpacing?: number;
        /** Margin around label text */
        margin?: number;
        /** Maximum width of the label. */
        maxWidth?: number;
        /** The minimum space, in pixels, that a label must display before
        shortening the label with ellipsis is considered. */
        minNonEllipsisWidth?: number;
        /** Padding between item content and item border. */
        padding?: number;
        /** Label text. */
        text?: string;
        /** Text style including fill color and font. */
        textStyle?: BaseSettingsTextStyle;
    }
    export interface BaseSettingsLegend {
        /** Advanced settings which may change in the future. */
        advanced?: BaseSettingsLegendAdvanced;
        /** How legend items are arranged.
        
        In grid mode, all entries have a fixed width and height and displayed
        based on how much of the entry grid is possible
        
        In inline mode, entry width and height is based on item width and
        height and items are displayed one after the other until all
        available legend space is filled */
        displayMode?: string;
        /** Show/hide chart legend. */
        enabled?: boolean;
        /** Whether to order entries to get possibly equal number of items into columns or rows. If false, once the row or column is full of entries,
        the next element will be first in the new row or column/rows. */
        equalizeRowsColumns?: boolean;
        /** Maximum height of the legend. If null, all available vertical space of chart will be consumed to set as much entries as possible.
        It coincides with the chart height if legend panel side is on a left or right. */
        height?: number;
        /** Settings related to the user interaction with the legend. */
        interaction?: BaseSettingsLegendInteraction;
        /** Vertical space between the lines of text. */
        lineSpacing?: number;
        /** Margin around each legend entry. */
        margin?: number;
        /** Visual element of legend entry with appropriate style to a slice color it corresponds. The content of each legend marker is the
        same as info popup appearing while hovering on slice. */
        marker?: BaseSettingsLegendMarker;
        /** Max number of symbols used in one line of text that applies to any legend entry. */
        maxLineSymbols?: number;
        /** Minium height of the legend. */
        minHeight?: number;
        /** Minium width of the legend. */
        minWidth?: number;
        /** Max number of columns. Use in conjunction with side parameter under the legend panel should be right or left in order to arrange entries by columns. */
        numberOfColumns?: number;
        /** Max number of rows. Use in conjunction with side parameter under the legend panel that should be set as bottom or top in order to arrange entries by rows. */
        numberOfRows?: number;
        /** Padding around each entry text and marker. */
        padding?: number;
        /** How long (in seconds) it should take for a legend page to scroll to
        the next location */
        pageScrollAnimationTime?: number;
        /** Legend enclosing panel settings. */
        panel?: BaseSettingsLegendPanel;
        scrollButtons?: BaseSettingsScrollButtons;
        /** Whether to automatically wrap legend text if any word is too long
        to fit in the legend entry */
        shouldForceWrapLongText?: boolean;
        /** Whether to hide legend text that is too long to fit in an entry */
        shouldHideLongText?: boolean;
        /** Text settings displaying in legend entries. */
        text?: BaseSettingsTextStyle;
        /** Maximum width of the legend. If null, all available horizontal space of chart will be consumed to set as much entries as possible.
        It coincides with the chart width if legend panel side is on a top or bottom. */
        width?: number;
    }
    export interface BaseSettingsLegendAdvanced {
        /** Background color for selected legend entry. */
        selectedBackground?: string;
        /** Border color for selected legend entry. */
        selectedBorder?: string;
    }
    export interface BaseSettingsLegendInteraction {
        /** Specifies if the legend can be interacted with by clicking each entry to select the particular item. */
        click?: boolean;
    }
    export interface BaseSettingsLegendMarker {
        /** Marker position relative to text */
        alignment?: "left" | "right";
        /** Line color around marker shape */
        lineColor?: string;
        /** Marker size. */
        size?: number;
    }
    export interface BaseSettingsLegendPanel extends BaseSettingsChartPanel {
        padding?: number;
        /** Whether to use space beyond chart boundaries */
        shouldFill?: boolean;
    }
    export interface BaseSettingsLineStyle extends BaseSettingsLineStyleBase {
        lineColor?: string;
    }
    export interface BaseSettingsLineStyleBase {
        lineColor?: string | CanvasGradient;
        lineDash?: Array<number>;
        lineDashOffset?: number;
        lineWidth?: number;
    }
    export interface BaseSettingsLocalization {
        /** Text used on menu close button. */
        closeButton?: string;
        /** Error message when data request has failed. */
        dataRequestFailed?: string;
        /** Error message when the browser does not support launching file save dialog from the script without
        using `advanced.exportProxyURL` and that setting has been disabled. */
        exportNotAvailable?: string;
        /** Message to show when data loading is in progress. */
        loadingLabel?: string;
        /** Strings used in toolbars. */
        toolbar?: BaseSettingsLocalizationToolbar;
    }
    export interface BaseSettingsLocalizationToolbar {
        backButton?: string;
        backTitle?: string;
        exportButton?: string;
        exportCSV?: string;
        exportJpeg?: string;
        exportPDF?: string;
        exportPNG?: string;
        exportTitle?: string;
        exportXLS?: string;
        fullscreenButton?: string;
        fullscreenTitle?: string;
        zoomoutButton?: string;
        zoomoutTitle?: string;
    }
    export interface BaseSettingsResizer {
        /** Enable/disable chart resizing. */
        enabled?: boolean;
        /** Whether to fix chart aspect ratio while resizing. */
        fixedAspect?: boolean;
        /** Distance from chart edge that will be used for resizing. */
        grabDistance?: number;
        /** Max pointer distance from chart edge when resize handle appears. */
        visibilityDistance?: number;
    }
    export interface BaseSettingsScrollButtons {
        /** Show/hide left, right scroll buttons if additional facets available. */
        enabled?: boolean;
        /** Whether to display title on the exported image. Note that it does not affect chart. */
        enabledOnExport?: boolean;
        /** How large the button should be on hover */
        hoverSize?: number;
        /** How long (in seconds) it should take for a hovered button to change
        from initial size to full size */
        hoverSizeActiveAnimationTime?: number;
        /** How long (in seconds) it should take for a hovered button to change
        from full size back to initial size */
        hoverSizeInactiveAnimationTime?: number;
        /** Button height or width. */
        size?: number;
        /** Scroll button style */
        style?: {
            fillColor?: string;
            hoverFillColor?: string;
            hoverLineColor?: string;
            lineColor?: string;
        };
    }
    export interface BaseSettingsTextStyle {
        fillColor?: string;
        font?: string;
        /** The color of the ouline around the text. Specify `null` to disable the outline. */
        outlineColor?: string;
        /** Specify how the edges of the ouline will be calculated. For details on the specific values please see the MDN documentation.
        
        Note that for certain serif fonts (such as Calibri) this property has no effect - since the font glyphs have rounded edges, the
        outline will be rounded. */
        outlineJoin?: "miter" | "round" | "bevel";
        /** The width of the outline in pixels. */
        outlineWidth?: number;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }
    export interface BaseSettingsTitle {
        /** Advanced settings */
        advanced?: {
            /** Determine the position of the title relative to the toolbars
            false - adds title first, then toolbar
            true - adds toolbar first, then title. Note, `toolbar.location` should be "outside" for this to have effect */
            addAfterToolbar?: boolean;
        };
        /** Alignment of the title text. */
        align?: "center" | "left" | "right";
        /** Show/hide chart title */
        enabled?: boolean;
        /** Whether to display title on the exported image. Note that it does not affect chart. */
        enabledOnExport?: boolean;
        /** Where the title is located in the chart */
        location?: "inside" | "outside";
        /** Margin around title text, in px. */
        margin?: number;
        /** Title style */
        style?: {
            fillColor?: string;
            font?: string;
        };
        /** Title text. */
        text?: string;
        /** Vertical alignment of the title text. */
        verticalAlign?: "top" | "bottom" | "center";
    }
    export interface BaseSettingsToolbar {
        /** Toolbar align. Note that it can be overridden for individual items using item.align. Also Use 'top' or 'bottom'
        sides in conjunction with 'left', 'right' align or use 'left', 'right' sides with 'top', 'bottom'. */
        align?: "left" | "right" | "top" | "bottom";
        /** Whether to align the toolbar to the chart area in horizontal mode */
        alignToChartWhenHorizontal?: boolean;
        /** Whether to show back button in toolbar. */
        back?: boolean;
        /** CSS class name for the toolbar HTML panel. */
        cssClass?: string;
        /** Show/hide toolbar. */
        enabled?: boolean;
        /** Whether to show export dropdown in toolbar. */
        export?: boolean;
        /** Specifies what options will be provided for the user in the Export dropdown. Specifying `null` here
        will enable all options.
        
        Note that some charts do not support `XLSX` or `CSV` option so enabling it here will not have any effect.
        
        Currently the order of the types given in this array are ignored. */
        exportOptions?: Array<"png" | "jpg" | "pdf" | "csv" | "xlsx">;
        /** A list of user defined items to show in toolbar. These are displayed in addition to the
        `items` collection (which includes the default buttons). */
        extraItems?: Array<string | BaseSettingsToolbarItem>;
        /** Whether to show the fullscreen button on the toolbar. */
        fullscreen?: boolean;
        /** Whether the toolbar will "stick" at the edge when scrolling */
        isSticky?: boolean;
        /** A list of toolbar items. If this is specified, it overrides all the default buttons.
        
        Use `extraItems` to specify items that should be displayed in addition to the defaults. */
        items?: Array<string | BaseSettingsToolbarItem>;
        /** Whether to limit dropdown menu height to the height of the chart */
        limitDropdownHeight?: boolean;
        /** Toolbar location inside chart. */
        location?: "auto" | "inside" | "outside";
        /** Whether to show or hide labels next to toolbar items by default. Note that it can be overridden for individual items using item.showLabels. */
        showLabels?: boolean;
        /** Toolbar placement side. Note that it can be overridden for individual items using item.side. */
        side?: "left" | "right" | "top" | "bottom";
        /** Whether to show the zoom out button. */
        zoomOut?: boolean;
    }
    export interface BaseSettingsToolbarItem extends BaseSettingsToolbarItemBase {
        /** Item align. */
        align?: "left" | "right" | "top" | "bottom";
        /** An array of nested items. Setting this will display a dropdown item instead of a simple button.
        
        Note that nested dropdowns are not supported. */
        dropDownItems?: Array<BaseSettingsToolbarItemBase>;
        /** Built in toolbar item name. Note that not all buttons are available for all charts. */
        item?: "back" | "displayPeriod" | "displayUnit" | "export" | "fit" | "freeze" | "fullscreen" | "logScale" | "rearrange" | "zoomOut" | "zoomControl";
        /** Item location */
        location?: "inside" | "outside";
        /** Whether to show button label. Use `false` to hide the label, `true` to show the label always and `null` to show the label when there is
        enough room in the toolbar. */
        showLabel?: boolean;
        /** Item side. */
        side?: "left" | "right" | "top" | "bottom";
    }
    export interface BaseSettingsToolbarItemBase {
        /** CSS class name. */
        cssClass?: string;
        /** Determines if the toolbar item is rendered as disabled. Disabled item do not fire the `onClick` handler
        when clicked. */
        enabled?: boolean;
        /** Item image, URL to image. */
        image?: string;
        /** Item label */
        label?: string;
        /** Function to execute on item click. */
        onClick?: (event: MouseEvent, chart: BaseApi) => void;
        /** Item title, shown on hover. */
        title?: string;
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface ItemsChartChartClickEventArguments extends ItemsChartChartEventArguments {
        clickItem: BaseLabel;
        clickLink: ItemsChartLink;
        clickNode: ItemsChartNode;
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface ItemsChartChartEventArguments extends BaseChartEventArguments {
        chartX: number;
        chartY: number;
        hoverItem: ItemsChartItemsLayerLinkItem | ItemsChartItemsLayerNodeItem;
        hoverLink: ItemsChartLink;
        hoverNode: ItemsChartNode;
        selection: Array<ItemsChartNode | ItemsChartLink>;
    }
    export interface ItemsChartDataObjectBase extends BaseDataErrorResponse {
    }
    export interface ItemsChartDataObjectLink extends ItemsChartDataObjectBase {
        className?: string;
        /** The ID of the node where the link originates. */
        from: string;
        /** The unique identifier of the link. */
        id?: string;
        style?: ItemsChartSettingsLinkStyle;
        /** The ID of the target node. */
        to: string;
    }
    export interface ItemsChartDataObjectNode extends ItemsChartDataObjectBase {
        className?: string;
        /** The unique identifier of the node. */
        id: string;
        /** Determines if the node data is complete (when `true`) or if the data is incomplete and only provided
        as a placeholder (value `false`).
        
        In most cases this should be specified as `true`, the exception being a scenario where another node contains
        a link to this node, that link is included in the data response but the data for this node is not available
        so a placeholder is created and the chart will have to issue another data request to load the actual data. */
        loaded: boolean;
        style?: ItemsChartSettingsNodeStyle;
    }
    export interface ItemsChartLink extends ItemsChartSettingsLinkStyle {
        /** Specifies if the link was used for radial/hierarchy layout (false) or not (true). This flag is ignored (always false) by static/dynamic layouts. */
        background: boolean;
        /** Data object that this link represents. */
        data: ItemsChartDataObjectLink;
        /** Node at the start of the link. */
        from: ItemsChartNode;
        /** Whether or not the mouse cursor is hovering over the link. */
        hovered: boolean;
        /** ID of the link */
        id: string;
        /** Specifies if the link is invisible - thus completely skipping the drawing and hit testing. However the link is not removed.
        This flag is set only by user code. */
        invisible: boolean;
        /** Link relevance is used in NetChart when the navigation mode is `focusnodes` and is intended to be a rough measure of how "interesting" a link is.
        For information about what relevance is and how it's calculated, see the [Focusnodes algorithm](net-chart/advanced-topics/focusnodes-algorithm-details.html). */
        relevance: number;
        /** If this is `false`, then the node is visible. If it is `true` or a non-zero a number (a "truthy" value), then the removal animation is in progress.
        After the removal animation completes, the node will be hidden. */
        removed: number | boolean;
        /** Whether or not the link is selected. */
        selected: boolean;
        /** Node at the end of the link. */
        to: ItemsChartNode;
    }
    /** A visible node. */
    export interface ItemsChartNode extends ItemsChartSettingsNodeStyle {
        /** Whether or not the node is a background node. This flag is set only by user code. */
        background: boolean;
        /** Data object that this node represents */
        data: ItemsChartDataObjectNode;
        /** Data obects for all links that are attached to the node. Note that not all of them may be visible. Only links with both end nodes visible are shown. */
        dataLinks: Array<ItemsChartDataObjectLink>;
        /** Whether or not the node is expanded. A node counts as "expanded" if all its links are visible. */
        expanded: boolean;
        focused: boolean;
        /** Whether or not the mouse cursor is hovering over the node. */
        hovered: boolean;
        /** ID of the node */
        id: string;
        /** Specifies if the node is invisible - thus completely skipping the drawing and hit testing. However the node is not removed.
        This flag is set only by user code. */
        invisible: boolean;
        /** A list of additional items for the particular node. To add or remove items, change this array. */
        items: Array<ItemsChartSettingsNodeItem>;
        /** Visible links attached to the node. */
        links: Array<ItemsChartLink>;
        /** Node relevance is used in NetChart when the navigation mode is `focusnodes` and is intended to be a rough measure of how "interesting" a node is.
        For information about what relevance is and how it's calculated, see the [Focusnodes algorithm](net-chart/advanced-topics/focusnodes-algorithm-details.html). */
        relevance: number;
        /** If this is `false`, then the node is visible. If it is `true` or a non-zero a number (a "truthy" value), then the removal animation is in progress.
        After the removal animation completes, the node will be hidden. */
        removed: number | boolean;
        /** Whether or not the node is selected. */
        selected: boolean;
        /** If true, the node is fixed in place and does not get affected by layout algorithms. This gets set automatically after the user drags a node in NetChart. */
        userLock: boolean;
    }
    export interface ItemsChartItemsLayerLinkItem extends ItemsChartItemsLayerLinkLabel {
        /** The style settings used to render this label. */
        style: ItemsChartSettingsLinkItem;
    }
    export interface ItemsChartItemsLayerLinkLabel extends ItemsChartItemsLayerNodeLabel {
        /** The style settings used to render this label. */
        style: ItemsChartSettingsItemsLayerLinkLabelStyle;
    }
    export interface ItemsChartItemsLayerNodeItem extends ItemsChartItemsLayerNodeLabel {
        /** The style settings used to render this label. */
        style: ItemsChartSettingsNodeItem;
    }
    export interface ItemsChartItemsLayerNodeLabel extends BaseLabel {
        /** The style settings used to render this label. */
        style: ItemsChartSettingsItemsLayerLabelStyle;
    }
    export enum ItemsChartNodeAnchorMode {
        Fixed = 2,
        /** Node if free-floating, */
        Floating = 0,
        Scene = 1,
    }
    export interface ItemsChartSettings extends BaseSettings {
        advanced?: ItemsChartSettingsAdvanced;
        /** Settings used to load data into chart. Customise preferred data source feeding methods.
        You can use one of these options: url, data function, preloaded data. */
        data?: Array<ItemsChartSettingsData>;
        /** The events used to handle user interaction with UI elements. */
        events?: BaseSettingsEvents<ItemsChartChartEventArguments, ItemsChartChartClickEventArguments>;
        /** Info popup for item - meaning links or nodes - with configurable content rendered. */
        info?: {
            /** Show/hide info popup */
            enabled?: boolean;
            /** Returns html string to display in passed links info popup. */
            linkContentsFunction?: (
                /** link data */
                linkData: ItemsChartDataObjectLink, 
                /** link object */
                link: ItemsChartLink, 
                /** callback function */
                asyncCallback: (contents: string | HTMLElement) => void) => string | HTMLElement;
            /** Returns html string to display in passed nodes info popup. */
            nodeContentsFunction?: (
                /** node data */
                nodeData: ItemsChartDataObjectNode, 
                /** node object */
                node: ItemsChartNode, 
                /** callback function */
                callback: (contents: string | HTMLElement) => void) => string | HTMLElement;
            /** Delay before showing the popup */
            showDelay?: number;
            /** Whether to show a label if no contents function has been
            provided */
            showLabelByDefault?: boolean;
        };
        /** Customise chart resize handles or animation duration settings. */
        interaction?: ItemsChartSettingsInteraction;
        /** Configurable link menu with option to specify a range of displaying buttons. */
        linkMenu?: ItemsChartSettingsLinkMenu;
        /** Configurable node menu with option to specify a range of displaying buttons. */
        nodeMenu?: ItemsChartSettingsNodeMenu;
        style?: {
        };
    }
    export interface ItemsChartSettingsAdvanced extends BaseSettingsAdvanced {
        /** Whether to display a loading indicator on every node, otherwise only a global loading indicator. */
        perNodeLoadingIndicator?: boolean;
        /** For very rare use cases where interaction must come from the correct
        part of the page to behave as expected.
        
        If doing significant configuration on the chart DOM elements, then:
        
        Try setting to 'true' if interactions seem to come from the wrong
        location e.g. interactions are offset by several pixels. This is the
        correct value for most use cases.
        
        Try setting to 'false' if the scroll wheel is not being detected in
        Google Chrome. */
        useLeafletInteractionContainer?: boolean;
    }
    export interface ItemsChartSettingsAuraStyle extends BaseSettingsBackgroundStyle {
        /** Whether the aura is enabled and visible */
        enabled?: boolean;
        /** Group ID for legend. Items in the same group have a different toggle behavior. When all the items in a group are enabled,
        clicking an item causes that item to stay enabled and all other items are disabled. Clicking it again enables all items
        again. Consequently, at least one item in each group is always enabled. The exception to this is if the group ID is null
        (no group) or the group contains only one item. Then the item is toggled on/off individually. */
        legendGroupId?: string;
        /** Name to show in legend */
        nameLegend?: string;
        /** Whether or not to show this aura in legend. */
        showInLegend?: boolean;
        /** Order in which to draw the auras. Auras with bigger order numbers are drawn on top of auras with smaller order numbers.
        Auras with equivalent order numbers are drawn ordered by ID. */
        zIndex?: number;
    }
    /** If display attribute is "customShape", SettingsCustomShape are
    required to determine how to render the custom shape */
    export interface ItemsChartSettingsCustomShape {
        /** When drawing links/arrows to the shape it may be desirable to determine the point where the arrow
        reaches and touches the respective shape. Given the start point of the ray, this function should return
        the distance to the outer border of the shape */
        distanceToEdge?: (
            /** radius */
            r: number, 
            /** width */
            w: number, 
            /** the ray towards shape */
            ddx: number, 
            /** the ray towards shape */
            ddy: number) => number;
        /** Function to test if hover action was over the respective shape. The function will be called in the context of the appropriate INode (i.e. "this"=INode). */
        hitTest?: (
            /** X coordinate of the hit test */
            x: number, 
            /** Y coordinate of the hit test */
            y: number, 
            /** Node scalign factor */
            itemScale: number, 
            /** Previous closest distance. */
            prevBest: number) => number;
        /** Method performed on update (such as hover). The function will be called in the context of the appropriate INode (i.e. "this"=INode). */
        onUpdate?: (
            /** The canvas on which the node will be rendered */
            context: CanvasRenderingContext2D, 
            /** The node radius radius, also available as "this.radius" */
            radius: number) => {
                /** Bounds of the node for the given radius. The values are [x0, y0, x1, y1] for the upper left and lower right corner respectively. */
                bounds: [number, number, number, number];
                /** One half of the width of the node. */
                HWidth: number;
                /** One half of the height of the node */
                HHeight: number;
                /** Optional. The anchor point [x,y] where the links will be attached. If not specified, the anchor points will be left at defaults. */
                anchor?: [number, number];
            };
        /** Function to render the custom shape in canvas 2d context. The function will be called in the context of the appropriate INode (i.e. "this"=INode). */
        paint?: (
            /** The canvas 2d rendering context for rendering */
            context: CanvasRenderingContext2D, 
            /** The X value of the center coordinate, where node needs to be rendered */
            x: number, 
            /** The Y value of the center coordinate where the node needs to be rendered */
            y: number, 
            /** Half of the width of the node */
            hWidth: number, 
            /** Half of the height of the node */
            hHeight: number, 
            /** Image of the node, if any. */
            image: HTMLCanvasElement | HTMLImageElement, 
            /** Whether or not to paint details (image, label). When the node is zoomed out far enough, the details aren't painted. */
            paintDetails: boolean) => void;
        /** Function to render the selection shape for custom shape in canvas 2d context.
        The function will be called in the context of the appropriate INode (i.e. "this"=INode). */
        paintSelection?: (
            /** The canvas 2d rendering context for rendering */
            context: CanvasRenderingContext2D, 
            /** The X value of the center coordinate, where node needs to be rendered */
            x: number, 
            /** The Y value of the center coordinate where the node needs to be rendered */
            y: number, 
            /** Half of the width of the node */
            hWidth: number, 
            /** Half of the height of the node */
            hHeight: number) => void;
    }
    export interface ItemsChartSettingsData extends BaseSettingsData {
        /** Count of caching items including only links and nodes. */
        cacheSize?: number;
        /** Specifies the random layout method: grid, tree, uniform. The default is uniform. */
        random?: "grid" | "tree" | "uniform";
        randomGridLinkProbability?: number;
        /** Generates random data. */
        randomLinks?: number;
        /** Generates random data. Specify a value larger than 0 to enable generating random data. */
        randomNodes?: number;
        randomTreeDensity?: number;
        /** Max number of nodes to submit in a single request. */
        requestMaxUnits?: number;
    }
    export interface ItemsChartSettingsInteraction extends BaseSettingsInteraction {
        /** Whether to allow moving nodes around. */
        nodesMovable?: boolean;
        /** Move chart vertically and horizontally by clicking on the main chart pane and dragging it on any direction. */
        panning?: {
            /** Enables/disables chart panning. */
            enabled?: boolean;
        };
        /** Select node to expand it or getting path. */
        selection?: ItemsChartSettingsInteractionSelection;
        /** Zoom in or out by swiping up or down with mouse scroll pad or by using the Zoom-out feature at the top left. */
        zooming?: ItemsChartSettingsInteractionZooming;
    }
    export interface ItemsChartSettingsInteractionSelection {
        /** Whether to move nodes outside of screen area. */
        allowMoveNodesOffscreen?: boolean;
        /** Enable/disable selection. */
        enabled?: boolean;
        /** Whether to set links selectable. */
        linksSelectable?: boolean;
        /** Whether to retain nodes location after being moved by the user. */
        lockNodesOnMove?: boolean;
        /** Whether to set nodes selectable. */
        nodesSelectable?: boolean;
        /** Max click distance from object that still counts as click on the object. */
        tolerance?: number;
    }
    export interface ItemsChartSettingsInteractionZooming {
        /** Whether to auto zoom every time user clicks on the chart. */
        autoZoomAfterClick?: boolean;
        /** A double-click on empty space will trigger zoom in by this value. Set to null or false to disable double click zooming. */
        doubleClickZoom?: number;
        /** Whether to zoom by two finger pinch. */
        fingers?: boolean;
        /** Whether a two-finger zoom takes precedence over an existing node drag */
        fingersOverrideDrag?: boolean;
        /** Sensitivity of wheel zoom. */
        sensitivity?: number;
        /** Whether to zoom by mouse wheel. */
        wheel?: boolean;
        /** Enable/Disable zoom in on double click. */
        zoomInOnDoubleClick?: boolean;
    }
    export interface ItemsChartSettingsItemClass {
        /** Class name */
        className?: string;
        /** Group ID for legend. Items in the same group have a different toggle behavior. When all the items in a group are enabled,
        clicking an item causes that item to stay enabled and all other items are disabled. Clicking it again enables all items
        again. Consequently, at least one item in each group is always enabled. The exception to this is if the group ID is null
        (no group) or the group contains only one item. Then the item is toggled on/off individually. */
        legendGroupId?: string;
        /** Name to use in legend */
        nameLegend?: string;
        /** Whether or not to show in legend. */
        showInLegend?: boolean;
    }
    export interface ItemsChartSettingsItemsLayerCategoryLabelStyle extends ItemsChartSettingsItemsLayerLabelStyle {
        positionX?: "right" | "left" | "start";
        positionY?: "top" | "start" | "bottom";
        side?: "center" | "right" | "left";
    }
    export interface ItemsChartSettingsItemsLayerItemStyle extends ItemsChartSettingsItemsLayerLabelStyle {
        /** Whether to enlarge the item when its parent is being hovered. */
        hoverEffect?: boolean;
        /** Governs the order of item drawing. Items with negative `zIndex` will be drawn beneath its parent. */
        zIndex?: number;
    }
    export interface ItemsChartSettingsItemsLayerLabelStyle extends BaseSettingsLabelStyle {
        /** If scaling by font size, how to round the scaled font. Mainly useful
        for optimizing font cache usage. */
        fontSizeScaleRoundingFunction?: (fontSize: number) => number;
        /** How much larger or smaller the item should be drawn */
        scale?: number;
        /** Whether to apply scaling by changing the font size. Only necessary
        when using subpixel font sizes with large scaling factors, as
        otherwise the browser would have skipped calculating the font because
        it was too small to be seen. */
        scaleByFontSize?: boolean;
        /** Whether to apply different scale according to initial size of the link or node. */
        scaleWithSize?: boolean;
        /** Whether to apply the scale if zoom changes. If false, the label size never changes. */
        scaleWithZoom?: boolean;
    }
    export interface ItemsChartSettingsItemsLayerLinkLabelStyle extends ItemsChartSettingsItemsLayerLabelStyle {
        /** Whether to rotate link labels in the same direction as link */
        rotateWithLink?: boolean;
    }
    export interface ItemsChartSettingsItemsLayerStyle {
        /** An "all included" style function. */
        allObjectsStyleFunction?: (
            /** all nodes that currently loaded on the chart */
            nodes: Array<ItemsChartNode>, 
            /** all links that are currently loaded on the chart */
            links: Array<ItemsChartLink>) => {
                modifiedNodes: Array<ItemsChartNode>;
                modifiedLinks: Array<ItemsChartLink>;
            };
        /** Which character is used to delimit multiple node or link classes in
        the class string for node and link data */
        classSplitChar?: string;
        /** Items are small UI elements that provide extra information. Items are attached to nodes or links and can display a label, image or both. */
        item?: ItemsChartSettingsItemsLayerItemStyle;
        /** Default link style. */
        link?: ItemsChartSettingsLinkStyle;
        /** The class rules to apply individual style for link subset. Use known CSS class definition practice.
        Define one or more classes by specifying name and style and apply those by node definition. If multiple
        classes applied separate them with space and class rules will cascade in order of class definition. */
        linkClasses?: Array<ItemsChartSettingsLinkClass>;
        /** Link decorations are not painted if link is shorter than this. */
        linkDecorationMinSize?: number;
        /** Link decoration size calculated as a product of the link radius and scale factor. The value lower than linkDecorationMinSize will take no effect. */
        linkDecorationScale?: number;
        /** Link details like labels, items are hidden if link width in pixels is below this value. */
        linkDetailMinSize?: number;
        /** Link details like labels, items are not rendered if chart zoom is below this value. */
        linkDetailMinZoom?: number;
        /** Additional style to apply when a link is hovered. */
        linkHovered?: ItemsChartSettingsLinkStyle;
        /** Link text style */
        linkLabel?: ItemsChartSettingsItemsLayerLinkLabelStyle;
        /** Base node size of link label that scales with link size. */
        linkLabelScaleBase?: number;
        /** An object defining one or more functions used to calculate node rendering style.
        Structure: { 'rule1':function1(nodeObj), 'rule2':function2(nodeObj) }
        The functions are executed in lexicographic order whenever node data or links change.
        Each function can modify the nodeObj to add specific style elements.
        @deprecated use linkStyleFunction instead */
        linkRules?: Dictionary<(node: ItemsChartLink) => void>;
        /** Additional style to apply when link is selected.
        
        See also the `selection` property that is applied to selected nodes and links. */
        linkSelected?: ItemsChartSettingsLinkStyle;
        /** A a style function for links. Will be called whenever a link property or data has changed.
        Use to dynamically set link style fields. */
        linkStyleFunction?: (node: ItemsChartLink) => void;
        /** Default node style. */
        node?: ItemsChartSettingsNodeStyle;
        /** Default node  anchor style. */
        nodeAnchor?: ItemsChartSettingsNodeAnchorStyle;
        /** Additional style to apply for background nodes. */
        nodeBackground?: ItemsChartSettingsNodeStyle;
        /** The class rules to apply individual style for node subset. Use known CSS class definition practice.
        Define one or more classes by specifying name and style and apply those by node definition. If multiple
        classes applied separate them with space and class rules will cascade in order of class definition. */
        nodeClasses?: Array<ItemsChartSettingsNodeClass>;
        /** Node details like labels, items, images are hidden if node width in pixels is below this value. */
        nodeDetailMinSize?: number;
        /** Node details like labels, items, images are not rendered if chart zoom is below this value. */
        nodeDetailMinZoom?: number;
        /** Additional style to apply when node is expanded. */
        nodeExpanded?: ItemsChartSettingsNodeStyle;
        /** Additional style to apply when node is focused. */
        nodeFocused?: ItemsChartSettingsNodeStyle;
        /** Additional style to apply when a node is hovered. */
        nodeHovered?: ItemsChartSettingsNodeStyle;
        /** Node label style. */
        nodeLabel?: ItemsChartSettingsItemsLayerLabelStyle;
        /** Base node size of node label that scales with node size. */
        nodeLabelScaleBase?: number;
        /** Additional style to apply when a node position is locked. */
        nodeLocked?: ItemsChartSettingsNodeStyle;
        /** Additional style to apply when node data is not yet loaded. */
        nodeNotLoaded?: ItemsChartSettingsNodeStyle;
        /** An object defining one or more functions used to calculate node rendering style.
        @deprecated use nodeStyleFunction instead */
        nodeRules?: Dictionary<(node: ItemsChartNode) => void>;
        /** Additional style to apply when node is selected.
        
        See also the `selection` property that is applied to selected nodes and links. */
        nodeSelected?: ItemsChartSettingsNodeStyle;
        /** A a style function for nodes. Will be called whenever a node property or data has changed.
        Use to dynamically set node style fields. */
        nodeStyleFunction?: (node: ItemsChartNode) => void;
        /** Color for fade out animation of removed objects. */
        removedColor?: string;
        /** Determines if link radius (width) is automatically scaled when the chart is zoomed in or out.
        If set to `null`, the value is inherited from `scaleObjectsWithZoom` */
        scaleLinksWithZoom?: boolean;
        /** Determines if node radius is automatically scaled when the chart is zoomed in or out.
        If `scaleLinksWithZoom` is not set, this value also impacts links. */
        scaleObjectsWithZoom?: boolean;
        /** The common selection drawn for both links and nodes.
        
        The difference between this and `linkSelected` and `nodeSelected` if that those are applied for each item
        individually, while this `selection` style is drawn as a background for all selected items. So if this
        specifies a semi-transparent fill color, at no point will there be two overlapping selections visible -
        instead one common background polygon will be drawn. */
        selection?: {
            /** Specifies if the common selection style should be rendered. If this is set to `false`, `nodeSelected`
            and `linkSelected` styles should be specified so that the selection can be visualized. */
            enabled?: boolean;
            /** The fill color of the selection shape. The default `null` means that the same color as the chart background
            will be used (assuming `white` when `transparent` is specified). The fill color is required if shadow color
            is specified since otherwise the shadow might be invisible. */
            fillColor?: string;
            /** The outline color of the selection shape. Must be specified for the shadow to be rendered. */
            lineColor?: string;
            lineWidth?: number;
            shadowBlur?: number;
            shadowColor?: string;
            shadowOffsetX?: number;
            shadowOffsetY?: number;
            /** Specifies the size in pixels by which the shape size is increased. This value is further multiplied
            by the zoom level. */
            sizeConstant?: number;
            /** The multiplier by which the radius of node is increased to get the selection shape size. Value of 0.2
            means that the size is increased by 20% (multiplied by 1.2). */
            sizeProportional?: number;
        };
    }
    export interface ItemsChartSettingsLinkClass extends ItemsChartSettingsItemClass {
        /** Style settings */
        style?: ItemsChartSettingsLinkStyle;
    }
    /** Link item. */
    export interface ItemsChartSettingsLinkItem extends ItemsChartSettingsItemsLayerItemStyle {
        /** Offset from link center along link direction. In pixels. */
        lx?: number;
        /** Offset from link center perpendicular to link direction. In pixels. */
        ly?: number;
        /** Offset from link center along link direction. A fraction of link length.
        Value of -1 places the item at the start of the link.
        Value of 1 places the item at the end of the link. */
        px?: number;
        /** Offset from link center perpendicularly to link direction. A fraction of link radius. */
        py?: number;
        /** Whether to rotate link labels in the same direction as link */
        rotateWithLink?: boolean;
        /** How wide should the item be relative to the link length. 1 equals
        link length, 0 or not given uses default size calculation */
        width?: number;
        /** X offset from link center in pixels. */
        x?: number;
        /** Y offset from link center in pixels. */
        y?: number;
    }
    export interface ItemsChartSettingsLinkMenu extends ItemsChartSettingsMenu {
        /** Custom buttons for the link menu */
        buttons?: Array<ItemsChartSettingsMenuButton>;
        /** Prepare html string or DOM element to include in the menu. Called whenever a menu is about to be shown.
        
        If this callback is not defined, the menu will display the label of the element. */
        contentsFunction?: (data: ItemsChartDataObjectLink, node: ItemsChartLink, callback: (result: string | HTMLElement) => void) => string | HTMLElement;
    }
    export interface ItemsChartSettingsLinkStyle {
        /** How high the curve of the link is, if curving is enabled. Can be negative to arc in the other direction. */
        arcAmount?: number;
        /** Where the arc of the curve occurs along the link, between -1.0 and 1.0. -1.0 for at the start point, 1.0 for at the end point. */
        arcOffset?: number;
        cursor?: string;
        /** Whether this link is considered in calculating a hierarchy layout */
        definesLayout?: boolean;
        /** null or "U", "D", "L", "R" */
        direction?: string;
        fillColor?: string;
        /** The decoration rendered where the link starts. */
        fromDecoration?: "circle" | "open arrow" | "hollow arrow" | "arrow";
        /** Specifies if the link is invisible - thus completely skipping the drawing and hit testing. This can be used, for example, to hide all links
        and showing only ones that meet certain criteria using `linkStyleFunction`. */
        invisible?: boolean;
        items?: Array<ItemsChartSettingsLinkItem>;
        label?: string;
        length?: number;
        lineDash?: Array<number>;
        lineDashBackgroundFillColor?: string;
        lineDashShape?: "rectangle" | "triangle" | "hexagon" | "inverseTriangle" | "inverseHexagon" | "diamond";
        /** Where along the link should an orthogonal link split to the other
        link between 0.0 and 1.0 for the start and end respectively. Note it must not be
        exactly 0.0 or 1.0. */
        orthogonalOffset?: number;
        /** Specifies the width of the line rendered for this link. */
        radius?: number;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
        strength?: number;
        /** The decoration rendered where the link ends. */
        toDecoration?: "circle" | "open arrow" | "hollow arrow" | "arrow";
        toPieColor?: string;
        toPieValue?: number;
    }
    export interface ItemsChartSettingsMenu {
        buttons?: Array<string | ItemsChartSettingsMenuButton>;
        /** Prepare html string or DOM element to include in the menu. Called whenever a menu is about to be shown.
        
        If this callback is not defined, the menu will display the label of the element. */
        contentsFunction?: (
            /** node data */
            data: ItemsChartDataObjectBase, 
            /** node object */
            node: ItemsChartNode | ItemsChartLink, 
            /** callback function if contents are not immediately available */
            callback: (
                /** New contents to include in the menu */
                result: string | HTMLElement) => void) => string | HTMLElement;
        /** Show/hide node/link menu. */
        enabled?: boolean;
        /** Whether to add a view data button to the menu. Useful for debugging. */
        showData?: boolean;
    }
    /** Describes a custom button that is added to the menu. */
    export interface ItemsChartSettingsMenuButton {
        /** The CSS class that is applied to the HTML link element (the button). */
        className?: string;
        /** The callback that will be invoked when the menu is clicked. */
        onClick?: (
            /** The link or node for which the button is being created. */
            target: ItemsChartNode | ItemsChartLink, 
            /** The HTML element that represents the button. */
            button: HTMLAnchorElement) => void;
        /** The callback that will be invoked when the menu button is first created for the particular object. */
        onInit?: (
            /** The link or node for which the button is being created. */
            target: ItemsChartNode | ItemsChartLink, 
            /** The HTML element that represents the button. */
            button: HTMLAnchorElement) => void;
        /** The callback that will be invoked when the menu is being opened after creation. The callback is also
        invoked for every button after any menu button is clicked. */
        onRefresh?: (
            /** The link or node for which the button is being created. */
            target: ItemsChartNode | ItemsChartLink, 
            /** The HTML element that represents the button. */
            button: HTMLAnchorElement) => void;
        /** The text (HTML is supported) that is displayed within the button. */
        text?: string | string | HTMLElement;
        /** Tooltip that is displayed while hovering over the button. Leaving `null` uses `text`. */
        title?: string;
    }
    export interface ItemsChartSettingsNodeAnchorStyle {
        lineColor?: string;
        lineDash?: Array<number>;
        lineWidth?: number;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }
    export interface ItemsChartSettingsNodeClass extends ItemsChartSettingsItemClass {
        /** Style settings */
        style?: ItemsChartSettingsNodeStyle;
    }
    /** Node item. */
    export interface ItemsChartSettingsNodeItem extends ItemsChartSettingsItemsLayerItemStyle {
        /** X offset from node center in units of item half width. */
        ix?: number;
        /** Y offset from node center in units of item half height. */
        iy?: number;
        /** X offset from node center. A fraction of node width.
        Value of -1 places the item at the left edge of the node.
        Value of 1 places the item at the right edge of the node. */
        px?: number;
        /** Y offset from node center. A fraction of node height.
        Value of -1 places the item at the top edge of the node.
        Value of 1 places the item at the bottom edge of the node. */
        py?: number;
        /** X offset from node center in pixels. */
        x?: number;
        /** Y offset from node center in pixels. */
        y?: number;
    }
    export interface ItemsChartSettingsNodeMenu extends ItemsChartSettingsMenu {
        /** Buttons to show in the node menu. It is possible to use both custom buttons and built-in buttons. When built-in buttons
        are used, they will be shown and hidden as necessary based on the node state. For example, the "unfocus" button will only
        be available for focused nodes; the "expand" button will only be available if there are hidden neighbor nodes, etc.
        
        Currently the following built-in buttons are supported:
        
        * `"btn:expand"` - expands the node. All nodes that are linked to this node are shown.
        * `"btn:collapse"` - collapses the node. In `focusnodes` navigation this hides all linked nodes with a smaller relevance;
          in other navigation modes this hides this node and all linked nodes.
        * `"btn:close"` - closes the node. Unavailable for `focusnodes` navigation; in other navigation modes hides all linked nodes
          that do not have any links to nodes other than this node or nodes directly linked to this node.
        * `"btn:focus"` - focuses the node. This is most useful for `focusnodes` navigation, but available for all navigation modes.
        * `"btn:unfocus"` - unfocuses the node. This is most useful for `focusnodes` navigation but available for all navigation modes.
        * `"btn:lock"` - pins the node in place and prevents the layout algorithm from moving it around.
        * `"btn:unlock"` - unpins the node and allows the layout algorithm to position the node as necessary.
        * `"btn:hide"` - Hides this node.
        * `"expand"` - Composite setting including `"btn:expand"`, `"btn:collapse"` and `"btn:close"`
        * `"focus"` - Composite setting including `"btn:focus"` and `"btn:unfocus"`
        * `"lock"` - Composite setting including `"btn:lock"` and `"btn:unlock"`
        * `"hide"` - Same as `"btn:hide"`, included for backwards compatibility */
        buttons?: Array<string | ItemsChartSettingsMenuButton>;
        /** Prepare html string or DOM element to include in the menu. Called whenever a menu is about to be shown.
        
        If this callback is not defined, the menu will display the label of the element. */
        contentsFunction?: (data: ItemsChartDataObjectNode, node: ItemsChartNode, callback: (result: string | HTMLElement) => void) => string | HTMLElement;
        /** Where the menu is positioned relative to the node */
        position?: "pointer" | "center" | "outside";
    }
    export interface ItemsChartSettingsNodeStyle {
        /** Node anchor mode. */
        anchorMode?: ItemsChartNodeAnchorMode;
        anchorStyle?: ItemsChartSettingsNodeAnchorStyle;
        /** Node anchor y position. If not set, initial position will be calculated automatically and conserved.
        The coordinate space is dependant on `anchorMode` value.
        * anchorMode = "Scene" - the value is in scene coordinates.
        * anchorMode = "Display" - the value is in pixels from top-left corner of the chart area. */
        anchorX?: number;
        /** Node anchor y position. If not set, initial position will be calculated automatically and conserved.
        The coordinate space is dependant on `anchorMode` value.
        * anchorMode = "Scene" - the value is in scene coordinates.
        * anchorMode = "Fixed" - the value is in pixels from top-left corner of the chart area. */
        anchorY?: number;
        /** When display="rectangle", this setting determines the width/height ratio of the rectangle.
        The longest edge of the rectangle will be set to "radius" and the shortest will be calculated from this variable. */
        aspectRatio?: number;
        /** The ID of one or more auras to which the node belongs. Nodes with the same aura ID will be visually grouped together.
        
        Note that if multiple auras for a single node are specified, `auras.overlap` setting should be set to `true`. */
        aura?: string | Array<string>;
        coordinates?: Array<number> | Array<Array<number>>;
        /** Cursor to show when node is hovered. */
        cursor?: string;
        /** Custom shape settings supplied, if display == "customShape" */
        customShape?: ItemsChartSettingsCustomShape;
        /** Valid values: circle (default), text, roundtext, droplet, rectangle, rhombus, diamond, customShape */
        display?: string;
        /** Controls if node is draggable; Values: draggable false - node cannot be dragged; draggable true - node can be dragged; Default is `true`. */
        draggable?: boolean;
        fillColor?: string | CanvasGradient;
        /** Fill gradient.
        For example: [[0,"black"],[0.5,"red"],[1, "orange"]]. */
        fillGradient?: GradientDefinition;
        /** Forces hierarchy layout to consider this node in a specific category
        for layout purposes */
        hierarchyCategory?: string;
        /** Forces hierarchy layout to place the node at a specific level */
        hierarchyLevel?: number;
        /** Forces hierarchy layout to place the node a certain number of
        levels above or below it's expected location */
        hierarchyOffset?: number;
        image?: string;
        /** Specifies the image cropping method. Valid values are `false` (disable cropping), `true` (default cropping mode), `"crop"`, `"letterbox"` and `"fit"`. */
        imageCropping?: "fit" | boolean | "crop" | "letterbox";
        /** Specifies if the node is invisible - thus completely skipping the drawing and hit testing. This can be used, for example, to hide all nodes
        and showing only ones that meet certain criteria using `nodeStyleFunction`. */
        invisible?: boolean;
        /** Additional items that are rendered on and around the node. */
        items?: Array<ItemsChartSettingsNodeItem>;
        /** The label text that is displayed below the node. Set to an empty string "" to remove the label if it has been added before. */
        label?: string;
        labelStyle?: ItemsChartSettingsItemsLayerLabelStyle;
        lineColor?: string;
        lineDash?: Array<number>;
        lineWidth?: number;
        onImageLoadError?: (node: any) => void;
        /** Node opacity. */
        opacity?: number;
        radius?: number;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }
    export interface ItemsChartSettingsNodesLayerAuras {
        /** The cell size of the grid (in display pixels). Smaller values result in more precise aura calculations but
        can be much slower. Note that decreasing the value also increses the memory requirements which can be
        significant if the number of auras is large. */
        cellSize?: number;
        /** Defines the default colors that are applied to auras for whom there are no specific style settings
        defined in the `style` property.
        
        If this is set to an empty array, only auras explicitly defined in `style` will be displayed. */
        defaultColors?: Array<string>;
        /** Default style which applies to all auras. Specific aura styles will override the defaults. */
        defaultStyle?: ItemsChartSettingsAuraStyle;
        /** The draw limit (0..1) which cells will be considered to belong to the aura. 
        
        Larger values result in smaller auras. The cells under the center of the node usually have values close to 1,
        while the edges have values close to 0. */
        drawLimit?: number;
        /** Specifies if the node auras are enabled. */
        enabled?: boolean;
        /** The multiplier for the node radius that defines the total area of the aura the node emanates.
        
        Note that this defines the size of the aura before the `drawLimit` value is applied to reduce the size
        of the aura. */
        intensity?: number;
        /** Specifies if the auras can be drawn overlapped or if every cell can only belong to a single aura. */
        overlap?: boolean;
        /** Defines specific styles for each aura. The key of the mapping has to match the aura ID. */
        style?: Dictionary<ItemsChartSettingsAuraStyle>;
    }
    export interface ItemsChartSettingsNodesLayerStyle extends ItemsChartSettingsItemsLayerStyle {
        /** Removed object fadeout time. */
        fadeTime?: number;
        /** style for hidden link hints. */
        hiddenLinks?: {
            lineColor?: string;
            lineWidth?: number;
            size?: number;
        };
        /** Link radius auto distribution method. */
        linkAutoScaling?: "linear" | "logarithmic";
        /** Link length auto distribution method. */
        linkLengthAutoScaling?: "linear" | "logarithmic";
        /** Min and max value of link length before zooming is applied. */
        linkLengthExtent?: [number, number];
        /** Min and max value of link half-width before zooming is applied. */
        linkRadiusExtent?: [number, number];
        /** Link strength auto distribution method. */
        linkStrengthAutoScaling?: "linear" | "logarithmic";
        /** Min and max value for link strength. */
        linkStrengthExtent?: [number, number];
        /** If the multilinks are curved, how much should they automatically curve away from each other.
        0 for no curvature change, 1 for balanced curving away. More extreme or in between values can also be used. */
        multilinkAutoCurve?: number;
        /** Distance between multiple links between two nodes. */
        multilinkSpacing?: number;
        /** Controls automatic node scaling. The radii are distributed in the range defined by `nodeRadiusExtent`.
        
        Valid values:
        - null - scaling disabled
        - linear - distribute node radii linearly
        - logarithmic - distribute node radii logarithmicaly
        - square - distribute node radii using square function */
        nodeAutoScaling?: "linear" | "logarithmic" | "square";
        /** Min and max value of node radius, before zooming is applied. To use this, specify `nodeAutoScaling`. */
        nodeRadiusExtent?: [number, number];
        /** The angle of the self-link in degrees. Limited to 0 < selfLinkAngle <= 90. */
        selfLinkAngle?: number;
        /** The "height" of the self links, how far away from the node center it will extend. This is a factor of the node radius.
        Must be positive. */
        selfLinkHeightFactor?: number;
        /** The shape of the  self-link. "Parabolic" makes sure the ends of the link point towards the center, but the self-link
        looks more "squished". "Quadratic" produces a more natural curve, but the ends of the link will not point at the center. */
        selfLinkShape?: "quadratic" | "parabolic";
        /** The "width" of the self links, how wide in parallel to the node it will extend. This is a factor of the default width,
        as determined by the shape. 1 is the default width. Must be non-negative. */
        selfLinkWidthFactor?: number;
    }
    export interface NetChartBarSettingsLocalizationToolbar extends BaseSettingsLocalizationToolbar {
        fitButton?: string;
        fitTitle?: string;
        freezeButton?: string;
        freezeTitle?: string;
        lassoButton?: string;
        lassoTitle?: string;
        rearrangeButton?: string;
        rearrangeTitle?: string;
        unfreezeTitle?: string;
    }
    export interface NetChartBarSettingsToolbar extends BaseSettingsToolbar {
        /** Whether to show the fit button on the toolbar. */
        fit?: boolean;
        /** Whether to show the freeze button on the toolbar. */
        freeze?: boolean;
        /** Whether to show the rearrange button on the toolbar. */
        rearrange?: boolean;
        /** Whether to show the zoom slider control. */
        zoomControl?: boolean;
    }
    /** Settings for gravity in the dynamic layout */
    export interface NetChartGravitySettings {
        /** The object affected by the gravity effect in the dynamic layout. */
        from?: "auto" | "node" | "cluster";
        /** How to find the center of the object which is affected by gravity. Only used if `from="cluster"`. Only non-locked nodes will be used to calculate the
        center. */
        fromCenter?: "weighted" | "geometric";
        /** Strength of the gravity effect. This does not have any tangible units but is rather a factor that is used in the calculations. If you
        want to tweak it, experiment until you find a suitable value. Larger values will mean a stronger gravity, smaller will mean weaker. Negative values are
        allowed and will reverse the effect, but are unlikely to be useful - unlike "traditional" Newtonian gravity, this one actually gets stronger as the nodes get
        further away from the center, so the result of a negative value will be uncontrolled, exponential expansion. Setting to 0 disables gravity entirely. */
        strength?: number;
        /** The object to which the gravity attracts the affected object. */
        to?: "cluster" | "nearestLockedNode" | "clusterLockedNodes" | "graph" | "graphLockedNodes";
        /** How to find the center of the object to which the gravity attacts. Not used if `to="nearestLockedNode"`. */
        toCenter?: "weighted" | "geometric";
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface NetChartChartClickEventArguments extends NetChartChartEventArguments {
        clickItem: BaseLabel;
        clickLink: ItemsChartLink;
        clickNode: ItemsChartNode;
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface NetChartChartEventArguments extends ItemsChartChartEventArguments {
        links: Array<ItemsChartLink>;
        nodes: Array<ItemsChartNode>;
    }
    export interface NetChartDataObject extends BaseDataErrorResponse {
        links: Array<NetChartDataObjectLink>;
        nodes: Array<NetChartDataObjectNode>;
    }
    export interface NetChartDataObjectLink extends ItemsChartDataObjectLink {
    }
    export interface NetChartDataObjectNode extends ItemsChartDataObjectNode {
        /** Whether the node is initially locked in place at the (x;y) coordinates. Used for all except static layouts. */
        locked?: boolean;
        /** Initial X coordinate, used for static layout. */
        x?: number;
        /** Initial Y coordinate, used for static layout. */
        y?: number;
    }
    export interface NetChartSettings extends ItemsChartSettings {
        /** Chart area related settings. */
        area?: NetChartSettingsArea;
        /** Contains settings for the auras drawn beneath the nodes. */
        auras?: ItemsChartSettingsNodesLayerAuras;
        /** Settings used to load data into chart. Customise preferred data source feeding methods.
        You can use one of these options: url, data function, preloaded data. */
        data?: Array<NetChartSettingsData>;
        /** The events used to handle user interaction with UI elements. */
        events?: NetChartSettingsEvents;
        /** Configurable conditions to filter the raw data values for subset of drawing nodes and links. */
        filters?: {
            /** Determine if link can be displayed. Invoked whenever a link is about to be shown or its data has changed.
            Only links that have been allowed by nodeFilter for both end nodes will be passed here. */
            linkFilter?: (
                /** link data object */
                linkData: NetChartDataObjectLink, 
                /** data object representing node where the link begins */
                fromNodeData: NetChartDataObjectNode, 
                /** data object representing node where the link ends */
                toNodeData: NetChartDataObjectNode) => boolean;
            /** Function called whenever there is more than one link between two nodes. Only links that were allowed by nodeFilter, linkFilter and nodeLinksProcessor
            will be passed here. The function can return either some of the original links, or create completely new links.
            In the latter case, link IDs MUST be unique (links passed in are guaranteed to have unique IDs). */
            multilinkProcessor?: (
                /** array of link data objects */
                arrayOfLinkData: Array<NetChartDataObjectLink>, 
                /** data object representing node where the links begins */
                fromData: NetChartDataObjectNode, 
                /** data object representing node where the links ends */
                toData: NetChartDataObjectNode) => NetChartDataObjectLink | Array<NetChartDataObjectLink>;
            /** Determine if node can be displayed. Invoked whenever a node or one of its links is about to be shown, or if data for the node (or its links) has changed. */
            nodeFilter?: (
                /** Node data object */
                nodeData: NetChartDataObjectNode, 
                /** Unfiltered array of link data objects (linkFilter/nodeLinksProcessor/multilinkProcessor have not been applied) */
                arrayOfLinkData: Array<NetChartDataObjectLink>) => boolean;
            /** From links that were allowed by nodeFilter and linkFilter, select the ones that will be displayed. This is basically a bulk version of linkFilter.
            It is also allowed to return a completely new set of links, however link IDs MUST be unique in this case
            (links passed in are guaranteed to have unique IDs). */
            nodeLinksProcessor?: (
                /** Node data object */
                nodeData: NetChartDataObjectNode, 
                /** Array of link data objects. All links are connected to the node. Only links that were allowed by nodeFilter/linkFilter will be passed here.
                MultilinkProcessor has not been applied yet. */
                links: Array<NetChartDataObjectLink>) => Array<NetChartDataObjectLink>;
        };
        /** Customise chart resize handles or animation duration settings. */
        interaction?: NetChartSettingsInteraction;
        /** Adjustable settings to get desired net chart layout style and animation while and before interacting. */
        layout?: NetChartSettingsLayout;
        /** The chart legend representing classes attached to nodes or links.
        The legend will display the visual styles specified in `style.nodeClasses` and `style.linkClasses` - by default these are not defined
        so the legend will be empty. */
        legend?: NetChartSettingsLegend;
        /** Localizeable strings including export type options and useful default buttons used for chart interaction.
        Buttons like to navigate back, set the chart on full screen and others. */
        localization?: NetChartSettingsLocalization;
        /** Settings for NetChart navigation (expanding/collapsing/focusing/unfocusing/showing/hiding). The main setting is "mode" which determines the overall
        algorithm for navigation. Other parameters can tweak this algorithm, but not all parameters apply to all algorithms. */
        navigation?: NetChartSettingsNavigation;
        /** Chart style settings. */
        style?: NetChartSettingsStyle;
        /** Theme to apply. You can either use this to share configuration objects between multiple charts or use one of the predefined
        themes. */
        theme?: NetChartSettings;
        /** Adjustable settings to manage default and custom toolbar items, as well as toolbar overall appearance. */
        toolbar?: NetChartBarSettingsToolbar;
    }
    export interface NetChartSettingsArea extends BaseSettingsArea {
        /** The center of the chart. Fraction of chart width. 0 = left side, 1 = right side.
        @deprecated this property is no longer used */
        centerX?: number;
        /** The center of the chart. Fraction of chart height, 0 = top, 1 = botom.
        @deprecated this property is no longer used */
        centerY?: number;
        /** Inner bottom padding, nodes will avoid this area.
        If the value is <= 1 then the value represents the fraction from the chart width.
        Otherwise it represents the padding value in pixels.
        @deprecated this property is no longer used */
        paddingBottom?: number;
        /** Inner left padding, nodes will avoid this area.
        If the value is <= 1 then the value represents the fraction from the chart width.
        Otherwise it represents the padding value in pixels.
        @deprecated this property is no longer used */
        paddingLeft?: number;
        /** Inner right padding, nodes will avoid this area.
        If the value is <= 1 then the value represents the fraction from the chart width.
        Otherwise it represents the padding value in pixels.
        @deprecated this property is no longer used */
        paddingRight?: number;
        /** Inner top padding, nodes will avoid this area.
        If the value is <= 1 then the value represents the fraction from the chart width.
        Otherwise it represents the padding value in pixels.
        @deprecated this property is no longer used */
        paddingTop?: number;
    }
    export interface NetChartSettingsData extends ItemsChartSettingsData {
        /** Load more chart data. */
        dataFunction?: (
            /** node IDs */
            nodes: Array<string>, 
            /** callback function to execute when data arrived correctly */
            success: (data: NetChartDataObject) => void, 
            /** callback function to execute when error occure while loading data */
            fail: (result: BaseDataErrorResponse) => void) => void;
        /** Provides the ability to embed chart data directly into the chart configuration.
        
        This data can be complete or act as the initial data where the rest will be requested dynamically using
        `url` or `dataFunction`. */
        preloaded?: NetChartDataObject;
    }
    export interface NetChartSettingsEvents extends BaseSettingsEvents<NetChartChartEventArguments, NetChartChartClickEventArguments> {
        /** Function called when data is loaded/added/replaced/removed. */
        onDataUpdated?: (
            /** An empty mouse event. */
            event: BaseMouseEvent, args: NetChartChartEventArguments) => void;
        onPointerDown?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: NetChartChartClickEventArguments) => void;
        /** Function called when pointer drag has happened. */
        onPointerDrag?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: NetChartChartClickEventArguments) => void;
        /** Function called when mouse pointer is moved. */
        onPointerMove?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: NetChartChartEventArguments) => void;
        /** Function called on pointer up. */
        onPointerUp?: (
            /** The mouse event. */
            event: BaseMouseEvent, args: NetChartChartClickEventArguments) => void;
    }
    export interface NetChartSettingsInteraction extends ItemsChartSettingsInteraction {
        /** The ability to rotate the chart with the pinch gesture, using 2 fingers */
        rotation?: {
            /** Enables/disables chart rotation via the multitouch gesture events */
            fingers?: boolean;
        };
        /** Select node to expand it or getting path. */
        selection?: NetChartSettingsInteractionSelection;
        /** Zoom in or out by swiping up or down with mouse scroll pad or by using the Zoom-out feature at the top left. */
        zooming?: NetChartSettingsInteractionZooming;
    }
    export interface NetChartSettingsInteractionSelection extends ItemsChartSettingsInteractionSelection {
        /** Enable/disable rectangular dragging selection. This has no effect if `enabled=false`. */
        dragSelect?: boolean;
        /** Whether drag select clears existing selection first */
        dragSelectClearsSelection?: boolean;
    }
    export interface NetChartSettingsInteractionZooming extends ItemsChartSettingsInteractionZooming {
        /** Zoom value limits for automatic zooming (for example, "Fit to screen"). Contains array of [min, max] values.
        
        If the minimum (the first value) is specified as `null`, the chart will not enforce it, instead it will be adjusted as needed
        if the network grows very large. Note that specifying `null` as the minimum also overrides the minimum for the `zoomExtent`
        value. */
        autoZoomExtent?: [number, number];
        /** The acceleration of scene movement, when trying to contain all nodes within the view,
        when autozoom is enabled. Increasing the value decreases latency, and makes the animation
        more responsive. Decreasing the value makes the animation more fluid */
        autoZoomPositionElasticity?: number;
        /** Controls the percentage of how much of the chart width/height the nodes can move around without
        triggering automatic zoom adjustment. A value of 0.9 means that the target is to leave 10% padding
        on all sides of the chart. However once the target  is reached, if the nodes move within these 10%
        on either side, the zoom adjustment is not performed. */
        autoZoomSize?: number;
        /** If the target zoom level differs from the current zoom level by
        more than autoZoomThreshold percent, then an actual zoom is
        performed. Otherwise the current zoom level is considered good
        enough.
        Useful to increase if many small zoom changes are causing
        small, unwanted shifts or vibrations in the zoom level.
        Useful to decrease if the zoom doesn't seem to be updating on changes
        that should change the zoom level. */
        autoZoomThreshold?: number;
        /** Auto zoom mode on chart initialization.
        
        Valid values:
        - `overview` - show whole network
        - `true` - use basic auto zoom
        - `false` - no auto zoom. */
        initialAutoZoom?: "overview" | boolean;
        shouldKeepGraphOnScreen?: boolean;
        /** Zoom value limits while for manual zooming. Contains array of [min, max] values.
        
        Note that if the minimum for `autoZoomExtent` is `null` (the default) then it can override the minimum in this value if the auto zoom level is smaller. */
        zoomExtent?: [number, number];
        /** Whether to update the zoom level immediately upon clicking the
        slider, or to only zoom when the slider is dragged. */
        zoomOnSliderClick?: boolean;
    }
    export interface NetChartSettingsLayout {
        /** Advanced chart settings. Be advised that they are subject to change, backwards compatibility is not guaranteed. */
        advanced?: {
            adaptiveFreezeTreshold?: number;
        };
        /** Whether to fit network in aspect ratio of chart viewport. Useful for small networks that always fit in chart and are not intended to be zoomed in / out. */
        aspectRatio?: boolean;
        /** The style for the labels in category hierarchy */
        categoryLabelStyle?: ItemsChartSettingsItemsLayerCategoryLabelStyle;
        /** For hierarchy layout, whether to attempt to center nodes under their
        parent */
        centerNodes?: boolean;
        /** Whether to perform global layout on network changes. Use it for better node placement at the cost of chart slowdown on network changes. */
        globalLayoutOnChanges?: boolean;
        /** For dynamic layout, settings for gravity that pulls all nodes together. */
        gravity?: NetChartGravitySettings;
        /** Desired horizontal distance between neighboring nodes with different parents in the hierarchy layout. By default `2*nodeSpacing` */
        groupSpacing?: number;
        /** Maximum time to wait for incremental layout to be completed. Note that bigger value will get nicer placement on network updates at the cost of longer delay. */
        incrementalLayoutMaxTime?: number;
        /** Maximum time to wait for initial layout to be completed. Note that bigger value will get nicer placement of big networks at the cost of long initial delay. */
        initialLayoutMaxTime?: number;
        /** Dynamic layout can be stopped faster if no more movement is detected. */
        layoutFreezeMinTimeout?: number;
        /** Dynamic layout is stopped after user is inactive for this time. */
        layoutFreezeTimeout?: number;
        /** Layout mode. */
        mode?: "dynamic" | "radial" | "hierarchy" | "static" | "swimlane" | "categoryHierarchy";
        /** Desired distance between nodes. */
        nodeSpacing?: number;
        /** Function executed by category hierarchy layout when it detects a
        link that creates a cycle in the graph */
        onCycleDetect?: (backLink: ItemsChartLink, cycle: Array<ItemsChartLink>) => void;
        /** For hierarchy layout, clockwise rotation of the tree(s), measured in degrees.
        0 = top-down tree; 90 = right-left tree; 180 = bottom-up tree, etc. Also affects placement of multiple trees the same way. */
        rotation?: number;
        /** Desired vertical distance between node rows in the hierarchy layout. */
        rowSpacing?: number;
        /** For hierarchy layout, scale the hierarchy on X, mainly used for
        mirroring and flipping */
        scaleX?: number;
        /** For hierarchy layout, scale the hierarchy on Y, mainly used for
        mirroring and flipping */
        scaleY?: number;
        /** For hierarchy layout, whether to sort trees during layout */
        sortForestBySize?: boolean;
        /** For hierarchy layout, whether to sort the nodes during layout */
        sortNodes?: boolean;
        /** Settings for swimlane layout */
        swimlane?: NetChartSettingsSwimlaneLayout;
        /** For radial layout, whether to lay out the first level in two rings, if necessary. */
        twoRingRadialLayout?: boolean;
    }
    export interface NetChartSettingsLegend extends BaseSettingsLegend {
        /** Advanced settings which may change in the future. */
        advanced?: NetChartSettingsLegendAdvanced;
        mode?: "hide" | "highlight";
        /** Legend enclosing panel settings. */
        panel?: BaseSettingsLegendPanel;
    }
    export interface NetChartSettingsLegendAdvanced extends BaseSettingsLegendAdvanced {
        /** When an item (node or link) has several classes applied, and the legend
        has some of them enabled, and some of the disabled, this governs whether
        that element is visible. If an element has no classes applied, it is
        always visible. If a class is applied to an element but is not shown in the
        legend (showInLegend=false), then this class is ignored for the calculation. */
        showItemsWithClasses?: "any" | "all";
        /** Style for legend entry text when a disabled item is displayed. */
        textColorDisabled?: string;
    }
    export interface NetChartSettingsLocalization extends BaseSettingsLocalization {
        /** Node/link menu by using localizeable strings. */
        menu?: {
            close?: string;
            collapse?: string;
            /** The text for the button that unlock the node position. */
            dynamic?: string;
            expand?: string;
            fixed?: string;
            focus?: string;
            hide?: string;
            unfocus?: string;
        };
        /** Strings used in toolbars. */
        toolbar?: NetChartBarSettingsLocalizationToolbar;
    }
    /** Settings for NetChart navigation (expanding/collapsing/focusing/unfocusing/showing/hiding). The main setting is `mode` which determines the overall
    algorithm for navigation. Other parameters can tweak this algorithm, but not all parameters apply to all algorithms. */
    export interface NetChartSettingsNavigation {
        /** Determines what happens if the user has reached maximum number of focus nodes (`numberOfFocusNodes`) and focuses another node.
        In focusnode mode, if this setting is `true`, then the least recently focused node will be unfocused; if this setting is `false`, 
        then the userwill not be able to focus the node. 
        In manual and showall modes, numberOfFocusNodes is not taken into account. If `true` then by focusing a different node, 
        the previous becomes unfocused. If 'false' then previous nodes remain focused.
        _Used by modes: all modes_ */
        autoUnfocus?: boolean;
        /** Whether to auto-zoom to a node when it is focused. _Used by modes: all modes_ */
        autoZoomOnFocus?: boolean;
        /** How many levels deep a node expand has if not specified. Only
        applies in focus node navigation mode. */
        defaultExpandDepth?: number;
        /** Which nodes to expand. Only applies in focus node navigation mode. */
        defaultExpandMode?: "both" | "from" | "to";
        /** If focusing a node would display several levels of nodes (due to `focusNodeExpansionRadius` or `focusNodeTailExpansionRadius`), each level is shown after
        the specified delay (milliseconds). Set to 0 to disable. _Used by modes: `focusnodes`_ */
        expandDelay?: number;
        /** Whether to expand node on click. _Used by modes: all modes_ */
        expandOnClick?: boolean;
        /** If set to true, nodes and links with [relevance](full-reference/ItemsChartNode.html#doc_relevance) < 1 will be drawn with a smaller radius and a faded out
        color (both multiplied by [relevance](full-reference/ItemsChartNode.html#doc_relevance)). _Used by modes: `focusnodes`_ */
        focusAutoFadeout?: boolean;
        /** Number of "levels" to automatically expand around the most recently focused node. If set to 1, all nodes directly linked to the focused node will be shown.
        If set to 2, all nodes directly connected to these nodes will be shown as well. Etc. Also used for calculating
        [node relevance](full-reference/ItemsChartNode.html#doc_relevance). _Used by modes: `focusnodes`_ */
        focusNodeExpansionRadius?: number;
        /** Similar to `focusNodeExpansionRadius`, but for the least recently focused node. This allows to create an effect, where the most recently focused node has
        many expanded nodes around it, while the least recently node has only a few (or vice versa). Intermediate focused nodes will have their expansion radius
        linearly interpolated between `focusNodeExpansionRadius` and `focusNodeTailExpansionRadius`. Also used to calculate
        [node relevance](full-reference/ItemsChartNode.html#doc_relevance). _Used by modes: `focusnodes`_ */
        focusNodeTailExpansionRadius?: number;
        /** The focus node expansion radius used on chart load and reset. */
        initialFocusNodeExpansionRadius?: number;
        /** Initially visible/focused nodes. Array of node identifiers. The precise effect depends on the navigation mode.
        * For `manual` this specifies the initially visible nodes and must contain at least 1 node.
        * For `showall` this specifies which nodes to show first, and other nodes are then requested recursively from these until all nodes are visible.
        * If this setting is left empty or `null`, the chart will directly request ALL nodes (this is more efficient if your data source supports it).
        * For `focusnodes` this specifies the initially focused nodes. The count of node IDs in this array must be between `minNumberOfFocusNodes` and
           `numberOfFocusNodes`
        
        _Used by modes: all modes_ */
        initialNodes?: Array<string>;
        /** Minimum number of focused nodes. Prevents user from unfocusing nodes if there are `minNumberOfFocusNodes` or less nodes focused.
        If the `focusnodes` navigation is used, this setting has a minimum value of 1. _Used by modes: all modes_ */
        minNumberOfFocusNodes?: number;
        /** Navigation mode - the algorithm that determines the expanding/collapsing logic. */
        mode?: "manual" | "showall" | "focusnodes";
        /** Maximum number of focused nodes. The `autoUnfocus` setting determines what happens when more nodes are focused.  _Used by modes: focusnodes_ */
        numberOfFocusNodes?: number;
    }
    export interface NetChartSettingsStyle extends ItemsChartSettingsNodesLayerStyle {
        /** The style for the resizable selection box. */
        dragSelection?: BaseSettingsBackgroundStyle;
    }
    export interface NetChartSettingsSwimlaneLayout extends NetChartSettingsSwimlaneLayoutStyle {
        /** What color the label box should be filled with */
        boxFillColor?: string;
        cellSettings?: Array<Array<NetChartSettingsSwimlaneLayoutCell>>;
        /** Whether to draw horizontal or vertical lanes first. Can be important
        for lane colors showing up correctly */
        drawVerticalFirst?: boolean;
        labelAlign?: "center" | "right" | "left";
        labelSideHorizontal?: "right" | "left";
        labelSideVertical?: "top" | "bottom";
        laneSpreadX?: number;
        laneSpreadY?: number;
        lanesHorizontal?: Array<NetChartSettingsSwimlaneLayoutLane>;
        lanesVertical?: Array<NetChartSettingsSwimlaneLayoutLane>;
        /** What color the swimlane lines are */
        lineColor?: string;
        /** How wide the swimlane lines are */
        lineWidth?: number;
    }
    export interface NetChartSettingsSwimlaneLayoutCell {
        fillColor?: string;
    }
    export interface NetChartSettingsSwimlaneLayoutLane extends NetChartSettingsSwimlaneLayoutStyle {
        /** The text displayed at the top of the lane */
        label?: string;
    }
    export interface NetChartSettingsSwimlaneLayoutStyle {
        /** What color the label box should be filled with */
        boxFillColor?: string;
        /** How tall the label box should be */
        boxHeight?: number;
        labelAlign?: "center" | "right" | "left";
        labelStyle?: ItemsChartSettingsItemsLayerLabelStyle;
        laneFillColor?: string;
        laneWidth?: number;
        lineColor?: string;
        shouldZoomBox?: boolean;
    }
    /* tslint:enable */
}

declare module ZoomCharts {
    /* tslint:disable */

    export class NetChart extends Configuration.BaseApi {
        public constructor(settings: Configuration.NetChartSettings);
        /** Adds the given data to whatever data the chart has currently loaded. The chart will automatically be updated
        to display this new data if it falls within the currently visible bounds. */
        public addData(data: Configuration.NetChartDataObject, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        /** Focuses a node. Whether or not the node will get actually focused depends no the navigation mode. */
        public addFocusNode(
            /** Node ID or object */
            id: string | Configuration.ItemsChartNode, 
            /** Explicitly assigned relevance (used only by Focusnodes navigation mode).
            For more information, see the [Focusnodes algorithm](net-chart/advanced-topics/focusnodes-algorithm-details.html) */
            relevance?: number): boolean;
        /** Removes focus from all nodes. The exact effect depends on the navigation mode. */
        public clearFocus(): void;
        /** Closes a node. The exact effect depends on the navigation mode. */
        public closeNode(
            /** Node ID or object */
            id: string | Configuration.ItemsChartNode): void;
        /** Collapses a node. The exact effect depends on the navigation mode. */
        public collapseNode(
            /** Node ID or object */
            id: string | Configuration.ItemsChartNode, expandMode?: string): void;
        /** Expands a visible node. */
        public expandNode(
            /** Node ID or object */
            id: string | Configuration.ItemsChartNode, depth?: number, expandMode?: string): void;
        public exportData(visibleOnly?: boolean, exportCoordinates?: boolean): Configuration.NetChartDataObject;
        public freezeLayout(): void;
        public getHiddenNodes(): Array<string>;
        /** Gets a visible link by its ID */
        public getLink(
            /** Link ID */
            id: string): Configuration.ItemsChartLink;
        /** Gets a visible node by its ID */
        public getNode(
            /** Node ID */
            id: string): Configuration.ItemsChartNode;
        public getNodeDimensions(node: Configuration.ItemsChartNode): {
                x: number;
                y: number;
                radius: number;
                hwidth: number;
            };
        public hideMenu(): this;
        /** Hides a visible node. Whether or not the node will get actually hidden depends on the navigation mode. */
        public hideNode(
            /** Node ID or object */
            id: string | Configuration.ItemsChartNode): void;
        public links(): Array<Configuration.ItemsChartLink>;
        /** Fixates a node in place. */
        public lockNode(
            /** Node ID or object */
            id: string | Configuration.ItemsChartNode, x: number, 
            /** Y position, in scene coordinates */
            y: number): void;
        public nodes(): Array<Configuration.ItemsChartNode>;
        /** Adds event listener. */
        public on(
            /** The type of the event for which the listener will be added. See method overloads for valid values. */
            name: string, 
            /** The callback function. It receives two arguments - the mouse event data and a separate object containing chart specific information. */
            listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartEventArguments) => void): void;
        public on(name: "chartUpdate", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        public on(name: "click", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartClickEventArguments) => void): void;
        public on(name: "doubleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartClickEventArguments) => void): void;
        public on(name: "error", listener: (
                /** An empty mouse event. */
                event: Configuration.BaseMouseEvent, args: Configuration.BaseChartErrorEventArguments) => void): void;
        public on(name: "hoverChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        /** Adds an event listener for pointer down event. */
        public on(name: "pointerDown", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        /** Adds an event listener for pointer down event. */
        public on(name: "dataUpdated", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        public on(name: "positionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        public on(name: "rightClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartClickEventArguments) => void): void;
        public on(name: "selectionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        public on(name: "settingsChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartSettingsChangeEventArguments) => void): void;
        public on(name: "tripleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartClickEventArguments) => void): void;
        /** Removes the given nodes and links from the chart. Note that only the ID values have to be given, all other properties are ignored. */
        public removeData(data: Configuration.NetChartDataObject, sourceId?: string): void;
        /** Removes focus from a node. Whether or not the node will get actually unfocused depends on the navigation mode. */
        public removeFocusNode(
            /** Node ID or object */
            id: string | Configuration.ItemsChartNode): void;
        /** Replaces the data already in the data cache with the given values. */
        public replaceData(data: Configuration.NetChartDataObject, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        /** Updates the chart settings but instead of merging some settings that are arrays or dictionaries (such as `data`)
        these collections are replaced completely. For example, this allows removal of series or value axis within TimeChart. */
        public replaceSettings(changes: Configuration.NetChartSettings): this;
        /** Rearranges all nodes to their default locations (note that for dynamic layout these positions are not deterministic)
        and enables automatic "overview" zoom.
        
        Note that these actions are done without animations. */
        public resetLayout(): void;
        /** Animates the viewport to zoom into and contain the nodes specified in the given array */
        public scrollIntoView(
            /** Nodes to zoom to */
            nodes: Array<string> | Array<Configuration.ItemsChartNode>, 
            /** Optionally, additional margins (in scene coordinates) to leave free on the sides. Order: top, right, bottom, left */
            margins?: [number, number, number, number]): void;
        /** Set/Get selected objects. */
        public selection(
            /** array of objects identifiers to select. Do not pass this parameter if you don't want to change current selection. */
            selected?: Array<string | Configuration.ItemsChartNode | Configuration.ItemsChartLink>): Array<Configuration.ItemsChartNode | Configuration.ItemsChartLink>;
        /** Shows a node by its ID. The data for the node gets requested in the standard manner.
        Whether or not the node will get actually shown depends on the navigation mode. */
        public showNode(
            /** Node ID */
            id: string): void;
        /** Shows context menu, when either node id or INode interface object is passed as a parameter. */
        public showNodeMenu(node: string | Configuration.ItemsChartNode): void;
        /** Lists the predefined themes for the chart. These can be used within the settings objects or via the `customize()` method:
        
        ```javascript 
        var chart = new ZoomCharts.$this({ theme: ZoomCharts.$this.themes.dark });
        chart.updateSettings({ theme: ZoomCharts.$this.themes.dark });
        chart.customize("dark");
        ``` */
        public static themes: {
            dark?: Configuration.NetChartSettings;
            flat?: Configuration.NetChartSettings;
        };
        public unfreezeLayout(): void;
        /** Unfixates a node and allows it to be repositioned by the layout algorithms. */
        public unlockNode(
            /** Node ID or object */
            id: string | Configuration.ItemsChartNode): void;
        /** Updates the chart settings. Only the settings that have to be changed should be passed. Note that some arrays
        and dictionaries (such as `data`) are merged by the ID values - if instead they should be replaced, use
        [`replaceSettings()`](#doc_replaceSettings) method. */
        public updateSettings(changes: Configuration.NetChartSettings): this;
        /** Updates (recalculates) the style for the whole chart or specific objects matching the given IDs. */
        public updateStyle(
            /** A list of IDs for the nodes and links which need their style recalculated */
            objects?: Array<string>): void;
        /** Gets or sets the current zoom level of the chart. A zoom level of `1` means that all nodes are rendered
        with the radius that is set in their configuration. A zoom level of `2` means that all nodes are twice
        the size and `0.5` means that all nodes are two times smaller than their specified radiuses.
        
        The zoom level is limited by [`interaction.zooming.zoomExtent` setting][zoomextent].
        
        Passing `auto` will enable the simple auto-zoom mode, passing `overview` will enable the auto-zoom that shows
        the whole network.
        
        [zoomextent]: https://zoomcharts.com/developers/en/net-chart/api-reference/settings/interaction/zooming/zoomExtent.html */
        public zoom(
            /** if specified and greater than zero, the zoom level will be updated to this value. */
            zoomValue?: number | "auto" | "overview" | "in" | "out", 
            /** specifies if the zoom change should be animated. The default is `true`. */
            animate?: boolean): number;
        /** 
        @deprecated Use `scrollIntoView()` instead. */
        public zoomIn(objects: Array<string>, animate?: boolean): void;
    }
    /* tslint:enable */
}

declare class NetChart extends ZoomCharts.NetChart { }

declare module ZoomCharts {
    export interface Dictionary<TValue> {
        [key: string]: TValue;
    }

    export interface NumberDictionary<TValue> {
        [key: number]: TValue;
    }

    export interface GradientDefinition extends Array<[number, string]> {
    }

    export type GradientMode = null | "vertical" | "horizontal"

    export type GradientType = null | "cylinder"


    export interface IRectangle {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
    }

    export interface IGeoRectangle {
        east: number;
        west: number;
        north: number;
        south: number;
    }

    export interface IColor {
        R: number;
        G: number;
        B: number;
        A: number;

        /** The cached result of this color converted to LAB */
        _lab?: { L: number; A: number; B: number; };
    }
}

interface Window {
    /** The name of the license to be used by all charts on the page. This value is usually in form `ZCX-foobar: production license for *.example.org` */
    ZoomChartsLicense: string;
    /** The license key to match the license name. This is a 512 character hexadecimal string. */
    ZoomChartsLicenseKey: string;
}

// empty placeholder so that zoomcharts.d.ts can be used with or without moment.js definition file.
declare namespace moment {
    export interface Moment {
    }
}

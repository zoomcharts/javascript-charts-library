/** TypeScript definition file for ZoomCharts 1.21.7 */

declare module ZoomCharts.Configuration {
    /* tslint:disable */

    export interface IGeoRectangle {
        east: number;
        north: number;
        south: number;
        west: number;
    }
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
    export interface BaseChartLassoUpdatedEventArguments extends BaseChartEventArguments {
        points: any;
        pointsMeta: any;
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
    export interface BaseSettingsClassMap {
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
    export interface BaseSettingsThresholdStyle {
        /** Specifies the fill color for the threshold area. If multiple areas overlap, this should specify an `rgba()` color with transparency.
            If 'null' fill color will not be applied. */
        fillColor?: string;
        /** Specifies the line color for the upper and lower bounds. If `null`, the lines will not be drawn. */
        lineColor?: string;
        /** Array of line dash pattern to have a dashed line. The array contains length of dash followed by length of space in pixels.
        A sequence of multiple dash-space values is supported. In case you want to set a solid line, pass empty array: [] */
        lineDash?: Array<number>;
        /** Specifies the width of the boundary lines. */
        lineWidth?: number;
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
    export enum BaseSettingsValueAxisBaseLineLabelMode {
        /** The label is drawn always if the line itself is visible. */
        always = 2,
        /** Unless the zero line is not visible, the label is drawn always for outside axis. For value axis that are located inside the chart area
        the label is only drawn if the value axis also shows negative values. */
        auto = 1,
        /** The label is never drawn. */
        never = 0,
    }
    export interface BaseSettingsValueAxisThreshold {
        /** How far the arrow is drawn from the edge of the screen */
        arrowOffset?: number;
        arrowPosition?: "right" | "left";
        arrowSize?: number;
        /** Style used for the arrow */
        arrowStyle?: BaseSettingsThresholdStyle;
        /** Specifies the bottom bound of the threshold area. */
        from?: number;
        /** How the from value should be determined */
        fromType?: "constant" | "first" | "last" | "minimum" | "maximum" | "median" | "average" | "percentile";
        label?: string;
        labelDecimals?: number;
        labelDisplayUnits?: string;
        labelHorizontalPadding?: number;
        labelHorizontalPosition?: "center" | "right" | "left";
        labelStyle?: BaseSettingsLabelStyle;
        /** Whether to use the line value as the label text */
        labelType?: "text" | "fromValue" | "toValue" | "textFromValue" | "textToValue";
        labelVerticalPadding?: number;
        labelVerticalPosition?: "center" | "above" | "under";
        /** Specifies a percentile to use when percentile is selected. Range 0
        to 100, must be integer. */
        percentileFrom?: number;
        /** Specifies a percentile to use when percentile is selected. Range 0
        to 100, must be integer. */
        percentileTo?: number;
        /** Threshold placement in relation to series data. */
        position?: "above" | "under";
        /** Which series to use for non-constant values */
        seriesID?: string;
        /** Describes the visual style for the threshold guidelines and area. */
        style?: BaseSettingsThresholdStyle;
        /** Specifies the upper bound of the threshold area. */
        to?: number;
        /** Which series to use for the "to" threshold's non-constant values. If
        null, uses seriesID. */
        toSeriesID?: string;
        /** Style to be used for the to line */
        toStyle?: BaseSettingsThresholdStyle;
        /** How the from value should be determined */
        toType?: "constant" | "first" | "last" | "minimum" | "maximum" | "median" | "average" | "percentile";
        valueFunction?: (from: number, to: number, settings: BaseSettingsValueAxisThreshold) => {
                fromLabel: string;
                toLabel: string;
            };
    }
    export interface BaseSettingsValueAxisTitleStyle extends BaseSettingsLabelStyle {
        reverseDirection?: boolean;
    }
    export interface FacetChartFacet {
        activeItemId: string;
        count: number;
        data: PieChartPieData;
        from: number;
        getActiveItem(): FacetChartItem;
        id: string;
        items: Array<FacetChartItem>;
        left: number;
        loading: boolean;
        offset: number;
        opacity: number;
        parentItem: FacetChartItem;
        rebuild: boolean;
        right: number;
        to: number;
        totalCount: number;
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface FacetChartChartClickEventArguments extends FacetChartChartEventArguments {
        clickFacet: FacetChartFacet;
        clickItem: FacetChartItem;
        /** Specifies the source of the click event. */
        clickOrigin: "item" | "label";
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface FacetChartChartEventArguments extends BaseChartEventArguments {
        count: number;
        facet: FacetChartFacet;
        hoverItem: FacetChartItem;
        /** `True` if the cursor is directly hovering a marker on a line series. `False` otherwise. */
        hoverMarker: boolean;
        /** The series that is currently directly under the cursor. `null` if the cursor is not hovering over data or is hovering over empty area. */
        hoverSeries: FacetChartSettingsSeries;
        offset: number;
        selection: Array<FacetChartItem>;
    }
    /** Describes a single slice in the data. Can include the nested items for that slice as well. */
    export interface FacetChartDataObject extends FacetChartDataObjectCommon {
        /** The ID of the slice. Note that if the ID is set then by default the chart assumes that the
        slice is expandable. To avoid this, set `style.expandable` to `false`.
        The slice ID is used to load the nested items and is the same value as the ID of the inner pie
        object. */
        id?: string;
        /** The name of the slice that will be used as the default label text. */
        name?: string;
        /** Styles specific to the particular item. Most styles are only applicable if the facetchart shows columns. */
        style?: FacetChartSettingsFacetStyle;
        /** Optional subvalues for drilldown. If subvalues are available, then you can either specify them directly, or provide
        `id` and let the chart request them separately. */
        subvalues?: Array<FacetChartDataObject>;
        /** The numeric value of the slice. This is used to calculated the size of the slice. */
        value: number;
    }
    export interface FacetChartDataObjectCommon extends BaseDataObjectBase {
        id?: string;
        name?: string;
        subvalues?: Array<FacetChartDataObject>;
    }
    export interface FacetChartDataObjectRoot extends FacetChartDataObjectCommon, BaseDataErrorResponse {
        /** In the case of a partial load, this specifies the sum of all values in the data source which come **after** the values
        in the `subvalues` array. If you're doing a partial load, you must specify at least 2 of the following: `afterSum`,
        `beforeSum`, `sum`. */
        afterSum?: number;
        /** In the case of a partial load, this specifies the sum of all values in the data source which come **before** the values
        in the `subvalues` array. If you're doing a partial load, you must specify at least 2 of the following: `afterSum`,
        `beforeSum`, `sum`. */
        beforeSum?: number;
        /** The ID of the pie for which the data is being loaded. Note that for the initial data request
        this value has to be empty, otherwise the chart assumes that the data is for a nested object and
        not for the initial view. */
        id?: string;
        /** In the case of a partial load, this specifies the maximum number of entries that was fetched from the data source.
        This is used to figure out if more data is available. If this field isn't set, or is set and is larger than the count
        of values in the `subvalues` array, then it is assumed that no more data is available. */
        limit?: number;
        /** The name of the root data object. */
        name?: string;
        /** In the case of a partial load, this specifies the offset in the data source where the `subvalues` array starts. This
        parameter is mandatory if you're doing a partial load. */
        offset?: number;
        /** Values for this drilldown level. In the case of a partial load, this will contain only a part of all values available
        in the data source. */
        subvalues: Array<FacetChartDataObject>;
        /** In the case of a partial load, this specifies the sum of all values in the data source. If you're doing a partial
        load, you must specify at least 2 of the following: `afterSum`, `beforeSum`, `sum`. */
        sum?: number;
    }
    export interface FacetChartItem {
        active: boolean;
        comment: FacetChartSettingsFacetComment;
        currentLabel: BaseLabel;
        data: FacetChartDataObject;
        expandable: boolean;
        facet: FacetChartFacet;
        id: string;
        index: number;
        innerFacet: FacetChartFacet;
        label: string;
        selected: boolean;
        url: string;
        urlTarget: string;
        values: Array<FacetChartItemValue>;
    }
    export interface FacetChartItemValue {
        currentLabel: BaseLabel;
        data: FacetChartDataObject;
        facet: FacetChartFacet;
        id: string;
        index: number;
        label: string;
        /** data to preview if previewContents = true */
        previewData: Array<number>;
        seriesId: string;
        style: FacetChartSettingsFacetStyle;
        value: number;
    }
    export interface FacetChartSettings extends LinearChartSettings {
        /** Chart area related settings. */
        area?: FacetChartSettingsArea;
        /** Default series settings for each series rendering type. Use this to configure all series of specific type to get line
        or column chart or combination of them. */
        chartTypes?: {
            /** Series type to render values as vertical bars. */
            columns?: FacetChartSettingsSeriesColumns;
            /** Series type to connect value points by lines. */
            line?: FacetChartSettingsSeriesLines;
        };
        comments?: FacetChartSettingsFacetComments;
        /** Settings used to load data into chart. Customise preferred data source feeding methods.
        You can use one of these options: url, data function, preloaded data. */
        data?: Array<FacetChartSettingsData>;
        /** The events used to handle user interaction with UI elements. */
        events?: LinearChartSettingsEvents<FacetChartChartEventArguments, FacetChartChartClickEventArguments>;
        /** Chart x-axis line rendered at the bottom horizontally to display group names under each bar. */
        facetAxis?: FacetChartSettingsFacetAxis;
        /** Configurable conditions to filter the raw data values for subset of drawing facets. */
        filters?: {
            /** Determines if zero values are automatically filtered from the data or if they will be displayed. */
            allowZeroValues?: boolean;
            /** Determine whether to show item or not. */
            sliceFilter?: (
                /** the item to test */
                item: FacetChartDataObject) => boolean;
        };
        /** A variety of interaction options that includes scrolling, zooming and swipe. */
        interaction?: FacetChartSettingsInteraction;
        /** Series cluster including name placed on facet axis. */
        items?: {
            /** Facet item style. */
            style?: {
                /** Whether to open series item on click */
                expandable?: boolean;
                /** Facet item text */
                label?: string;
            };
            /** Dynamically determine item style from data. */
            styleFunction?: (
                /** item to apply predefined style */
                item: FacetChartItem, 
                /** data relevant to item */
                itemData: FacetChartDataObject) => void;
        };
        /** The chart legend by additional interactivity to change the visibility of series it corresponds. */
        legend?: LinearChartSettingsLegend;
        /** Settings to specify initial view once the page loaded. */
        navigation?: {
            /** Initial facet drilldown to show. For example ['', 'Firefox', 'Firefox 2.5'] denotes to various browsers grouped by versions. */
            initialDrilldown?: Array<string>;
            /** Initial scroll offset, number of items from start. */
            initialOffset?: number;
        };
        /** Array of series in the chart. Each of the series can be different type, can use different data source and
        aggregation. Additionally, series can be clustered and stacked. */
        series?: Array<FacetChartSettingsSeries>;
        /** The default series used as the chart dominant data. Use settings.series array to specify actual series. */
        seriesDefault?: FacetChartSettingsSeries;
        /** Theme to apply. You can either use this to share configuration objects between multiple charts or use one of the predefined
        themes. */
        theme?: FacetChartSettings;
        /** Adjustable settings to manage default and custom toolbar items, as well as toolbar overall appearance. */
        toolbar?: FacetChartSettingsToolbar;
    }
    export interface FacetChartSettingsArea extends LinearChartSettingsArea {
        /** Area style. */
        style?: FacetChartSettingsAreaStyle;
    }
    export interface FacetChartSettingsAreaStyle extends LinearChartSettingsAreaStyle {
        selection?: FacetChartSettingsAreaStyleSelection;
    }
    export interface FacetChartSettingsAreaStyleSelection {
        /** Specifies if the selection is drawn behind or above the series themselves. */
        behindSeries?: boolean;
        fillColor?: string;
        lineColor?: string;
        lineWidth?: number;
    }
    export interface FacetChartSettingsData extends PieChartSettingsData {
        /** Load more chart data. */
        dataFunction?: (
            /** The ID of the parent slice. `null` when loading the top level data. */
            id: string, 
            /** max number of slices to load on pie */
            limit: number, 
            /** number of slices to skip from start */
            offset: number, 
            /** callback function to execute when data arrived correctly */
            success: (data: FacetChartDataObjectRoot) => void, 
            /** callback function to execute when error occure while loading data */
            fail: (result: BaseDataErrorResponse) => void) => void;
        /** Provides the ability to embed chart data directly into the chart configuration.
        
        This data can be complete or act as the initial data where the rest will be requested dynamically using
        `url` or `dataFunction`. */
        preloaded?: FacetChartDataObjectRoot;
        /** If set, items will be sorted in descending order using values from this field. You can either specify a single field or an array
        of fields.
        
        To sort the values ascending, prefix the field name with `-`, for example, `-value` (without any spaces).
        
        The default value `null` means that the chart does not reorder the data and it is displayed in the order it is given in the
        data source.
        
        The callback receives two data objects every iteration, return `0` for equal values, `1` if the first value should be before the other
        and `-1` otherwise.
        
        ```javascript
        sortField: function (a, b) {
        // handle null and undefined values as zeroes
        var v1 = a.val || 0;
        var v2 = b.val || 0;
        if (v1 === v2) return 0;
        if (v1 < v2) return 1;
        return -1;
        }
        ``` */
        sortField?: string | Array<string> | ((a: FacetChartDataObject, b: FacetChartDataObject) => number);
    }
    export interface FacetChartSettingsFacetAxis {
        /** Default width of one item. Used to calculate initial view. */
        defaultUnitWidth?: number;
        /** Show/hide facet axis. */
        enabled?: boolean;
        /** Facet axis name settings. */
        labels?: FacetChartSettingsFacetAxisLabels;
        /** Maximum size x axis will grow to while fitting labels */
        maxSize?: number;
        /** Maximum width of one item. */
        maxUnitWidth?: number;
        /** Minimum width of one item. */
        minUnitWidth?: number;
        /** Height of the x axis. */
        size?: number;
        /** Configures the title for the facet axis.
        
        Note that the title shares space with the facet axis labels. You might need to increase the value of `facetAxis.size`
        property so that the labels are not hidden by the title. */
        title?: FacetChartSettingsFacetAxisTitleStyle;
        /** The width of a single unit that will trigger a zoom-out action when the user swipes up.
        
        Note that the other trigger for zoomout is to swipe up until all the bars fit in half the width of the chart. In this case this unit width
        might not have been reached. */
        zoomOutUnitWidth?: number;
    }
    export interface FacetChartSettingsFacetAxisLabels extends BaseSettingsLabelStyle {
        /** Specifies if labels with angle that is not multiple of 90 (either horizontal or vertical) are allowed
        to overflow the left and right sides of the facet axis.
        
        In the simple case this setting allows the first label with angle -45 degrees to be rendered under the
        value axis, giving it slightly more space. */
        allowOverflow?: boolean;
        enabled?: boolean;
        interLabelSpacing?: number;
        /** The default text displayed for each value when the data item does not define a specific text. */
        text?: string;
    }
    export interface FacetChartSettingsFacetAxisTitleStyle extends BaseSettingsLabelStyle {
        /** Determines if the title is enabled. */
        enabled?: boolean;
        /** Specifies the default title that is used if the data does not define a `name` property. 
        
        Note that `useFacetName` property can be used to disable reading the `name` property so that this
        value is always used. */
        text?: string;
        /** Determines if the `name` property from the data overrides the `text` value in these settings. */
        useFacetName?: boolean;
    }
    export interface FacetChartSettingsFacetComment {
        iconMarkerAlign?: "center" | "right" | "left";
        iconMarkerPosition?: "default" | "top" | "bottom";
        iconStyle?: BaseSettingsLabelStyle;
        iconText?: string;
        labelStyle?: BaseSettingsLabelStyle;
        text?: string;
    }
    export interface FacetChartSettingsFacetComments {
        enabled?: boolean;
        height?: number;
        iconMarkerPosition?: "default" | "top" | "bottom";
        panel?: BaseSettingsChartPanel;
        scrollAnimationDuration?: number;
        scrollButtons?: BaseSettingsScrollButtons;
        width?: number;
    }
    export interface FacetChartSettingsFacetStyle extends FacetChartSettingsSeriesColumnsStyle {
        comment?: FacetChartSettingsFacetComment;
        /** Specifies if the item can be expanded. */
        expandable?: boolean;
    }
    export interface FacetChartSettingsInteraction extends LinearChartSettingsInteraction {
        /** Chart animation settings. */
        animation?: {
            /** Duration of scroll animation. */
            scrollDuration?: number;
        };
        /** Interaction mode. Note that `selection.enabled` can be used to disable the selection completely.
        
        Values:
        - `drilldown` - performs drill down on click, if item is not expandable, selects it
        - `select` - selects items
        - `toggle` - toggle selects items. */
        mode?: "drilldown" | "select" | "toggle";
        /** Configurable settings for select option. Note that the selection style is configured by `area.style.selection`. */
        selection?: FacetChartSettingsInteractionSelection;
    }
    export interface FacetChartSettingsInteractionSelection {
        /** Enable/disable selection. Setting this to `false` disabled the selection by clicking on the chart,
        however the selection can still be set using the API.
        
        Disabling the selection interaction could enable some advanced scenarios where the data is highly
        dynamic but the selection state must always be consistent with some outside state. */
        enabled?: boolean;
        /** Distance in pixels to both sides of an item that is still considered as a hover/click on the item. */
        tolerance?: number;
    }
    export interface FacetChartSettingsSeries extends LinearChartSettingsSeries {
        /** Data manipulation settings used for default series. */
        data?: FacetChartSettingsSeriesData;
        /** Series type. */
        type?: "columns" | "line";
    }
    export interface FacetChartSettingsSeriesColumns extends LinearChartSettingsSeriesColumns {
        /** Data manipulation settings used for default series. */
        data?: FacetChartSettingsSeriesData;
        /** Default column style. */
        style?: FacetChartSettingsSeriesColumnsStyle;
    }
    export interface FacetChartSettingsSeriesColumnsStyle extends LinearChartSettingsSeriesColumnsStyle {
        /** Set to `true` in order to display a "preview" of the value distribution in each column.
        The line color is specified in `previewLineColor` */
        previewContents?: boolean;
        /** The color of the line used to draw the distribution if `previewContents` is `true`. */
        previewLineColor?: string;
    }
    export interface FacetChartSettingsSeriesData extends LinearChartSettingsSeriesData {
        /** Object property of subvalue that will be used for series data aggregation. An alternative is to use `valueFunction`. If neither are specified
        the field `value` is implied. */
        field?: string;
        /** Retrieves the individual value used for calculations from the data array. This is an alternative for specifying `index`. */
        valueFunction?: (
            /** entry in data values array where the value at index 0 is the timestamp */
            data: Array<number> | FacetChartDataObject) => number;
    }
    export interface FacetChartSettingsSeriesLines extends LinearChartSettingsSeriesLines {
        /** Data manipulation settings used for default series. */
        data?: FacetChartSettingsSeriesData;
        /** Default style for line type series. */
        style?: FacetChartSettingsSeriesLinesStyle;
    }
    export interface FacetChartSettingsSeriesLinesStyle extends LinearChartSettingsSeriesLinesStyle {
        /** Enables customizing the marker for each particular data point. The function receives an array of all horizontal indices that are being painted and
        an array of vertical positions for each marker. Both arrays have the same length.
        
        The output has to be an array of the same length where each entry represents a marker that will be drawn for that value. If the array contains a `null` value
        that specific marker is not drawn.
        
        Note that this method is not used when the marker is drawn for the legend entry.
        
        This method will be invoked on each frame so it is important that it is optimized for performance. */
        markerStyleFunction?: (
            /** The items for which the markers can be displayed. */
            items: Array<FacetChartItemValue>, verticalPositions: Array<number>) => Array<LinearChartSettingsSeriesStyleMarker>;
    }
    export interface FacetChartSettingsToolbar extends BaseSettingsToolbar {
        /** Show/hide toolbar. */
        enabled?: boolean;
        /** A list of toolbar items. If this is specified, it overrides all the default buttons.
        
        Use `extraItems` to specify items that should be displayed in addition to the defaults. */
        items?: Array<BaseSettingsToolbarItem>;
        /** Whether to show the Lin/Log button in the toolbar. */
        logScale?: boolean;
        /** Whether to show the zoom out button. */
        zoomOut?: boolean;
    }
    export interface GeoChartAggregationDataObjectNode extends GeoChartGeoDataObjectNode {
        /** Contains all original node data objects that have been aggregated into this instance */
        aggregatedNodes: Array<GeoChartGeoDataObjectNode>;
        aggregatedWeight: number;
    }
    export interface GeoChartDataObject extends BaseDataErrorResponse {
        /** Instructs the chart to clear the data cache before applying this dataset.
        
        This can be used as a temporary workaround to use `GeoChart.addData()` to replace the whole dataset since unlike
        `GeoChart.replaceData()` the `addData` method updates existing nodes instead of replacing them, thus enabling things
        like radius animations. */
        clearCache?: boolean;
        east: number;
        links?: Array<GeoChartGeoDataObjectLink>;
        nodes: Array<GeoChartGeoDataObjectNode>;
        north: number;
        south: number;
        west: number;
    }
    export interface GeoChartDataRequest {
        /** Specifies the latitude coordinates of the grid that is included in the request.
        @deprecated use the automatic proximity based aggregation instead */
        aggregateLat: Array<number>;
        /** Specifies the latitude coordinates of the grid that is included in the request.
        @deprecated use the automatic proximity based aggregation instead */
        aggregateLng: Array<number>;
        /** The value from the configuration.
        @deprecated use the automatic proximity based aggregation instead */
        aggregateMinItems: number;
        east: number;
        id: string;
        layerId: string;
        north: number;
        south: number;
        west: number;
        zoom: number;
    }
    export interface GeoChartGeoDataObjectLink extends ItemsChartDataObjectLink {
    }
    export interface GeoChartGeoDataObjectNode extends ItemsChartDataObjectNode {
        /** Marks this node as a result for the grid based aggregation. If this is specified, `count` must be as well.
        @deprecated use the automatic proximity based aggregation instead */
        aggregate?: boolean;
        /** Coordinates can specify a point (for example, [0, 2]) or a shape (an array containing separate polygons, where each polygon
        is an array of concatenated X/Y coordinate pairs, for example [[0,2,2,2,2,0],[10,10,12,12]]) 
        
        The first value in the coordinate pair is longitude (east/west) and the second is latitude (north/south). */
        coordinates?: [number, number] | Array<Array<number>>;
        /** The count of aggregated nodes within the grid cell. Only used if `aggregate` is set to `true`.
        @deprecated use the automatic proximity based aggregation insted */
        count?: number;
        /** If the data object has been generated from GeoJSON, this property will contain the entire feature object from which this data object was created. */
        shapeFeature?: any;
        /** If the data object has been generated from GeoJSON, this property will contain the entire geometry object from which this data object was created. */
        shapeGeometry?: any;
        type?: string;
    }
    export interface GeoChartSettings extends ItemsChartSettings {
        /** Chart area related settings. */
        area?: GeoChartSettingsArea;
        background?: GeoChartSettingsBackground;
        /** Settings used to load data into chart. Customise preferred data source feeding methods.
        You can use one of these options: url, data function, preloaded data. */
        data?: Array<GeoChartSettingsData>;
        /** The events used to handle user interaction with UI elements. */
        events?: GeoChartSettingsEvents;
        filters?: {
            nodeFilter?: (node: GeoChartGeoDataObjectNode) => boolean;
        };
        /** Customise chart resize handles or animation duration settings. */
        interaction?: GeoChartSettingsInteraction;
        /** The default values for specific layer types. Any custom values in specified in `layers` property will be applied on top of the
        values specified here, based on the `type` property witin them. */
        layerTypes?: {
            aggregateOnShapes?: GeoChartSettingsLayerAggregated;
            charts?: GeoChartSettingsLayerCharts;
            items?: GeoChartSettingsLayerItems;
            shapes?: GeoChartSettingsLayerShapes;
        };
        /** An array of objects. Have a look at "layerTypes" for the possible object types */
        layers?: Array<GeoChartSettingsLayerBase>;
        /** Specifies the defaults for all layers, independent of the layer type.
        @deprecated This section is no longer used, specify the defaults in `layerTypes` section, based on the appropriate layer type. */
        layersDefault?: GeoChartSettingsLayerBase;
        navigation?: {
            drilldownLayer?: string;
            initialDrilldown?: Array<string>;
            /** Specify latitude of the initial center coordinate (WGS-84 degrees) */
            initialLat?: number;
            /** Specify longitude of the initial center coordinate (WGS-84 degrees) */
            initialLng?: number;
            /** Specify the initial zoom level for the chart. (For most chart data sources, valid values are 0..18 inclusive). */
            initialZoom?: number;
            maxBounds?: {
                east?: number;
                north?: number;
                south?: number;
                west?: number;
            };
            maxZoom?: number;
            minZoom?: number;
        };
        style?: {
            fadeTime?: number;
            selection?: {
                fillColor?: string;
                sizeConstant?: number;
                sizeProportional?: number;
            };
        };
        /** Theme to apply. You can either use this to share configuration objects between multiple charts or use one of the predefined
        themes. */
        theme?: GeoChartSettings;
        /** Please note that currently toolbar is not supported on GeoChart.
        @deprecated */
        toolbar?: BaseSettingsToolbar;
    }
    export interface GeoChartSettingsAggregatedShapeStyle extends BaseSettingsBackgroundStyle {
        /** Specifies when the aggregated shape is shown behind the node. */
        mode?: GeoChartSettingsAggregatedShapeStyleMode;
    }
    export enum GeoChartSettingsAggregatedShapeStyleMode {
        /** The aggregated shapes will always be shown for all nodes. */
        always = 2,
        /** The aggregated shape will never be shown. */
        disabled = 0,
        /** The aggregated shape will only be shown for the hovered node (this is the default). */
        hovered = 1,
        /** The aggregated shapes will always be shown for selected nodes. */
        selected = 3,
    }
    export interface GeoChartSettingsAggregation {
        /** The approximate minimum distance in pixels between two nodes before they are aggregated together. */
        distance?: number;
        /** Enables/Disables automatic aggregation */
        enabled?: boolean;
        /** Specifies if nodes where the `weightFunction` returns 0 are completely ignored by the aggregation. This means that they 
        are not drawn in the convex shape and also are not present in the `aggregatedNodes` property. */
        ignoreZeroWeight?: boolean;
        /** The last zoom level on which the nodes are automatically agregated. When the chart is zoomed in deeper, the original
        nodes will be used instead. */
        maxZoom?: number;
        /** A delegate that can be used to process aggregated nodes before links are aggregated.
        The delegate should modify the given array and mapping information if some nodes should be
        aggregated differently. */
        postProcessAggregatedNodes?: (
            /** The aggregated node objects. */
            nodes: Array<GeoChartAggregationDataObjectNode>, 
            /** A dictionary that maps the original node ID to the aggregated node (the same instance that is present in the `nodes` array). */
            map: Dictionary<GeoChartAggregationDataObjectNode>, 
            /** An empty array that the delegate is expected to fill with aggregated nodes that have been modified. */
            modifiedNodes: Array<GeoChartAggregationDataObjectNode>) => void;
        /** If true, aggregated nodes are placed in the center of mass of all the
        underlying nodes, even if no actual underlying node is at that 
        location. 
        Otherwise, aggregated nodes are placed at the location of a single 
        real "representative" node. */
        shouldCentralize?: boolean;
        /** Function that returns the value used as weight in the aggregation process for each node. */
        weightFunction?: (node: GeoChartGeoDataObjectNode) => number;
    }
    export interface GeoChartSettingsArea extends BaseSettingsArea {
        /** Whether to include Leaflet's zoom control */
        showLeafletZoom?: boolean;
        /** Area style. */
        style?: GeoChartSettingsAreaStyle;
    }
    export interface GeoChartSettingsAreaStyle extends BaseSettingsAreaStyle {
    }
    export interface GeoChartSettingsBackground {
        enabled?: boolean;
        params?: GeoChartSettingsWmsParams | GeoChartSettingsBackgroundParams;
        type?: "tile" | "wms";
        url?: string;
    }
    /** This type matches L.TileLayerOptions type from the Leaflet library. */
    export interface GeoChartSettingsBackgroundParams {
        /** e.g. "� CloudMade" � the string used by the attribution control, describes
        the layer data.
        
        Default value: ''. */
        attribution?: string;
        /** If set to true, the tile coordinates won't be wrapped by world width (-180
        to 180 longitude) or clamped to lie within world height (-90 to 90). Use this
        if you use Leaflet for maps that don't reflect the real world (e.g. game, indoor
        or photo maps).
        
        Default value: false. */
        continuousWorld?: boolean;
        /** If true and user is on a retina display, it will request four tiles of half the
        specified size and a bigger zoom level in place of one to utilize the high resolution.
        
        Default value: false. */
        detectRetina?: boolean;
        /** URL to the tile image to show in place of the tile that failed to load.
        
        Default value: ''. */
        errorTileUrl?: string;
        /** Maximum zoom number the tiles source has available. If it is specified,
        the tiles on all zoom levels higher than maxNativeZoom will be loaded from
        maxZoom level and auto-scaled.
        
        Default value: null. */
        maxNativeZoom?: number;
        /** Maximum zoom number.
        
        Default value: 18. */
        maxZoom?: number;
        /** Minimum zoom number.
        
        Default value: 0. */
        minZoom?: number;
        /** If set to true, the tiles just won't load outside the world width (-180 to 180
        longitude) instead of repeating.
        
        Default value: false. */
        noWrap?: boolean;
        /** The opacity of the tile layer.
        
        Default value: 1.0. */
        opacity?: number;
        /** If true, all the tiles that are not visible after panning are placed in a reuse
        queue from which they will be fetched when new tiles become visible (as opposed
        to dynamically creating new ones). This will in theory keep memory usage
        low and eliminate the need for reserving new memory whenever a new tile is
        needed.
        
        Default value: false. */
        reuseTiles?: boolean;
        /** Subdomains of the tile service. Can be passed in the form of one string (where
        each letter is a subdomain name) or an array of strings.
        
        Default value: 'abc'. */
        subdomains?: string | Array<string>;
        /** Tile size (width and height in pixels, assuming tiles are square).
        
        Default value: 256. */
        tileSize?: number;
        /** If true, inverses Y axis numbering for tiles (turn this on for TMS services).
        
        Default value: false. */
        tms?: boolean;
        /** If true, all the tiles that are not visible after panning are removed (for
        better performance). true by default on mobile WebKit, otherwise false. */
        unloadInvisibleTiles?: boolean;
        /** If false, new tiles are loaded during panning, otherwise only after it (for
        better performance). true by default on mobile WebKit, otherwise false. */
        updateWhenIdle?: boolean;
        /** The explicit zIndex of the tile layer. Not set by default. */
        zIndex?: number;
        /** The zoom number used in tile URLs will be offset with this value.
        
        Default value: 0. */
        zoomOffset?: number;
        /** If set to true, the zoom number used in tile URLs will be reversed (maxZoom
        - zoom instead of zoom)
        
        Default value: false. */
        zoomReverse?: boolean;
    }
    export interface GeoChartSettingsData extends ItemsChartSettingsData {
        /** Specifies the size of the grid that is included in the request.
        @deprecated use the automatic proximity based aggregation instead */
        aggregationGridSize?: number;
        /** The value will be passed to the data request together with the aggregation grid data.
        @deprecated use the automatic proximity based aggregation instead */
        aggregationMinCount?: number;
        bounds?: [number, number, number, number];
        dataFunction?: (request: GeoChartDataRequest, success: (data: GeoChartDataObject) => void, fail: (result: BaseDataErrorResponse) => void) => void;
        maxRequestRect?: [number, number];
        /** If true, data source will use bounds to limit response, if false, assume all data is returned. */
        perBoundsData?: boolean;
        /** If true, separate data is requested at each drilldown level. */
        perDrilldownData?: boolean;
        /** If true, separate data is requested at each zoom level. */
        perZoomData?: boolean;
        prefetchRatio?: number;
        /** Provides the ability to embed chart data directly into the chart configuration.
        
        This data can be complete or act as the initial data where the rest will be requested dynamically using
        `url` or `dataFunction`. */
        preloaded?: GeoChartDataObject;
        /** If true, the data request will include the coordinates for the aggregation grid.
        @deprecated use the automatic proximity based aggregation instead */
        useGridBasedAggregation?: boolean;
        wrapLng?: boolean;
    }
    export interface GeoChartSettingsEvents extends BaseSettingsEvents<NetChartChartEventArguments, NetChartChartClickEventArguments> {
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
    export interface GeoChartSettingsInteraction extends ItemsChartSettingsInteraction {
        mode?: "drilldown" | "select" | "toggle";
        /** Extra interaction options to control such behavior like disabling zoom in on double click. */
        zooming?: GeoChartSettingsInteractionZooming;
    }
    export interface GeoChartSettingsInteractionZooming extends ItemsChartSettingsInteractionZooming {
        /** Enables/Disables zoom in on double click. Informs Leaflet not to do this action. */
        zoomInOnDoubleClick?: boolean;
    }
    export interface GeoChartSettingsLayerAggregated extends GeoChartSettingsLayerOverlay {
        /** Aggregation function to use. */
        aggregation?: "sum" | "min" | "max" | "first" | "last" | "avg" | "count";
        /** Data field used for aggregation. */
        aggregationField?: string;
        /** Custom function to call for aggregation */
        aggregationFunction?: (
            /** array of nodes matching single shape */
            nodesArray: Array<GeoChartGeoDataObjectNode>) => number;
        /** The ID of a linked shapes layer. Style changes will be applied to this layer. The shapes layer must be defined before the aggregation layer. */
        shapesLayer?: string;
        /** Function for applying the aggregated value on node. */
        styleFunction?: (
            /** shape node style is being applied to */
            node: ItemsChartNode, 
            /** computed aggregate value */
            value: number) => void;
    }
    export interface GeoChartSettingsLayerBase {
        data?: {
            id?: string;
        };
        enabled?: boolean;
        id?: string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
        /** Forces style re-evaluation on zoom change. Use to provide zoom dependant style. */
        perZoomStyle?: boolean;
        type?: "shapes" | "items" | "charts" | "aggregateOnShapes";
        useFindObjectHack?: boolean;
    }
    export interface GeoChartSettingsLayerCharts extends GeoChartSettingsLayerOverlay {
        /** Chart type to use */
        chartType?: "piechart" | "timechart" | "facetchart";
        data?: {
            /** ID should be `null` because the charts layer does not retrieve data this way. */
            id?: string;
        };
        /** The settings that will be passed to each nested chart. Note that if `settingsFunction` is also specified, these
        settings will not be used and `settingsFunction` will be called instead. */
        settings?: TimeChartSettings | PieChartSettings | FacetChartSettings;
        /** The delegate that will be used to retrieve custom setting for a particular node. This function is called every time the node is modified.
        The result should only contain modified settings that will be passed to `chart.updateSettings()`. */
        settingsFunction?: (node: ItemsChartNode, data: GeoChartGeoDataObjectNode) => TimeChartSettings | PieChartSettings | FacetChartSettings;
        /** The charts layer will take data from shapes or nodes layer and creates a chart for every shape/node. */
        shapesLayer?: string;
    }
    export interface GeoChartSettingsLayerItems extends GeoChartSettingsLayerBase {
        /** Controls automatic proximity based aggregation. */
        aggregation?: GeoChartSettingsAggregation;
        /** Contains settings for the auras drawn beneath the nodes. */
        auras?: ItemsChartSettingsNodesLayerAuras;
        layout?: GeoChartSettingsNodesLayout;
        style?: GeoChartSettingsNodesLayerStyle;
    }
    export interface GeoChartSettingsLayerOverlay extends GeoChartSettingsLayerBase {
        /** The ID of a linked shapes layer. The shapes layer must be defined before the overlay layer. */
        shapesLayer?: string;
    }
    export interface GeoChartSettingsLayerShapes extends GeoChartSettingsLayerBase {
        style?: GeoChartSettingsShapesLayerStyle;
    }
    export interface GeoChartSettingsNodesLayerStyle extends ItemsChartSettingsNodesLayerStyle {
        /** The style used to draw convex shapes for the automatically aggregated nodes. */
        aggregatedShape?: GeoChartSettingsAggregatedShapeStyle;
    }
    export interface GeoChartSettingsNodesLayout {
        /** Anchor strength, relative to link strength. */
        anchorStrength?: number;
        /** Layout mode. */
        mode?: "dynamic" | "static";
        /** Desired distance between nodes. */
        nodeSpacing?: number;
    }
    export interface GeoChartSettingsShapesLayerNodeStyle extends ItemsChartSettingsNodeStyle {
        /** Specifies if the node representing the shape can be drilled down into. */
        expandable?: boolean;
    }
    export interface GeoChartSettingsShapesLayerStyle extends GeoChartSettingsNodesLayerStyle {
        /** Default node style. */
        node?: GeoChartSettingsShapesLayerNodeStyle;
        /** Controls shape simplification to improve rendering performance.
        Distance in pixels between points to simplify.
        Use 0 to disable simplification. */
        shapeSimplificationPrecision?: number;
    }
    /** This type matches L.WMSOptions type from the Leaflet library. */
    export interface GeoChartSettingsWmsParams {
        /** WMS image format (use 'image/png' for layers with transparency).
        
        Default value: false. */
        format?: string;
        /** (required) Comma-separated list of WMS layers to show.
        
        Default value: ''. */
        layers?: string;
        /** Comma-separated list of WMS styles.
        
        Default value: 'image/jpeg'. */
        styles?: string;
        /** If true, the WMS service will return images with transparency.
        
        Default value: '1.1.1'. */
        transparent?: boolean;
        /** Version of the WMS service to use. */
        version?: string;
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
    export interface LinearChartRendererData {
        config?: Array<FacetChartItemValue>;
        /** The number of value points aggregated for each value. Used for calculating averages based on the values for larger units. */
        counts: Array<number>;
        /** The function that returns the values that are passed to public delegates that allow customization of specific items. */
        externalItems(from: number, to: number, extra: any): Array<any>;
        fromIndex: number;
        leadIn?: LinearChartRendererDataLead;
        leadOut?: LinearChartRendererDataLead;
        times: Array<number>;
        toIndex: number;
        values: Array<number>;
        xes: Array<number>;
    }
    export interface LinearChartRendererDataLead {
        counts: Array<number>;
        fromIndex: number;
        times: Array<number>;
        toIndex: number;
        values: Array<number>;
        xes: Array<number>;
    }
    export interface LinearChartSeriesStackData {
        config: LinearChartSettingsStack;
        data: Array<LinearChartSeriesStackDataItem>;
        name: string;
    }
    export interface LinearChartSeriesStackDataItem {
        config: LinearChartSettingsSeries;
        name: string;
        values: LinearChartSeriesStackDataItemValues;
    }
    export interface LinearChartSeriesStackDataItemValues {
        /** The average value within the range. Only available if the series aggregation is `sum` or `avg`. */
        avg: number;
        change: number;
        count: number;
        first: number;
        fromIndex: number;
        last: number;
        max: number;
        min: number;
        sum: number;
        toIndex: number;
    }
    export interface LinearChartSettings extends BaseSettings {
        /** Chart area related settings. */
        area?: LinearChartSettingsArea;
        /** Default series settings for each series rendering type. Use this to configure all series of specific type to get line
        or column chart or combination of them. */
        chartTypes?: {
            /** Series type to show an opening and closing value on top of a total variance. */
            candlestick?: LinearChartSettingsSeriesCandleStick;
            /** Series type to render values as vertical bars. */
            columns?: LinearChartSettingsSeriesColumns;
            /** Series type to connect value points by lines. */
            line?: LinearChartSettingsSeriesLines;
        };
        /** The events used to handle user interaction with UI elements. */
        events?: LinearChartSettingsEvents<BaseChartEventArguments, BaseChartEventArguments>;
        horizontal?: boolean;
        /** Info popup when hovering over columns or lines. Content returned in a form of html and is relevant to context of series hovered. */
        info?: LinearChartSettingsInfoPopup;
        /** A variety of interaction options that includes scrolling, zooming and swipe. */
        interaction?: LinearChartSettingsInteraction;
        legend?: LinearChartSettingsLegend;
        /** Localizeable strings including export type options and useful default buttons used for chart interaction.
        Buttons like to navigate back, set the chart on full screen and others. */
        localization?: LinearChartSettingsLocalization;
        scrollButtons?: BaseSettingsScrollButtons;
        /** Array of series in the chart. Each of the series can be different type, can use different data source and
        aggregation. Additionally, series can be clustered and stacked. */
        series?: Array<LinearChartSettingsSeries>;
        /** The default series used as the chart dominant data. Use settings.series array to specify actual series. */
        seriesDefault?: LinearChartSettingsSeries;
        /** Defines stack settings to use in series. Each property is a stack name and value is stack settings.
        Values stack of each series on top of each other in the specified series order. Those, stacked bars help
        to visualize data that is a sum of parts, each of which is in a series. */
        stacks?: Dictionary<LinearChartSettingsStack>;
        /** The default style settings for series. */
        style?: {
            /** The default colors applied to the series with `type: "columns"`. The colors are applied in order to all series that do not specify an explicit style. */
            columnColors?: Array<string>;
            /** The default colors applied to the series with `type: "line"`. The colors are applied in order to all series that do not specify an explicit style. */
            lineColors?: Array<string>;
        };
        /** Configures one or more value axis. If no axis are defined, `valueAxisDefault` settings are used to automatically create a single value axis. */
        valueAxis?: Dictionary<LinearChartSettingsValueAxis>;
        /** The default settings inherited by all value axis. */
        valueAxisDefault?: LinearChartSettingsValueAxis;
    }
    export interface LinearChartSettingsArea extends BaseSettingsArea {
        /** Area style. */
        style?: LinearChartSettingsAreaStyle;
    }
    export interface LinearChartSettingsAreaStyle extends BaseSettingsAreaStyle {
        /** Style settings when there is no data to display. */
        noData?: {
            fillColor?: string;
            /** Image to show when there is no data to display. */
            image?: string;
        };
        /** Zoom In/Zoom Out animation highlight settings. */
        zoomHighlight?: LinearChartSettingsHighlightStyle;
        /** Zoom highlight style after zoom animation is finished. */
        zoomHighlightInactive?: {
            fillColor?: string;
        };
    }
    export interface LinearChartSettingsCandleStickMotionStyle {
        /** LHOC pattern style when body part excluded */
        bar?: {
            lineColor?: string;
            lineDash?: Array<number>;
            lineWidth?: number;
            shadowBlur?: number;
            shadowColor?: string;
            shadowOffsetX?: number;
            shadowOffsetY?: number;
        };
        /** LHOC pattern style when body part included. Line and shadow properties relevant to candlestick outline including body and shadow part. */
        candlestick?: {
            fillColor?: string;
            /** Candlestick outline color. Including item body outline and shadow stroke style. */
            lineColor?: string;
            lineDash?: Array<number>;
            lineWidth?: number;
            shadowBlur?: number;
            shadowColor?: string;
            shadowOffsetX?: number;
            shadowOffsetY?: number;
        };
    }
    export interface LinearChartSettingsEvents<TArguments extends BaseChartEventArguments, TClickArguments extends BaseChartEventArguments> extends BaseSettingsEvents<TArguments, TClickArguments> {
        /** Function called when chart scrolling animation is finished. */
        onAnimationDone?: (
            /** An empty mouse event. */
            event: BaseMouseEvent, args: TArguments) => void;
    }
    export interface LinearChartSettingsHighlightStyle {
        /** Fade in duration. It will only be used when the highlight is displayed the first time. If highlight of the same category is already
        shown, `fadeCross` will be used instead. */
        fadeIn?: number;
        /** Fade out duration. It will only be used when the highlight is removed and no highlight of the same category is being shown. */
        fadeOut?: number;
        fillColor?: string;
    }
    export interface LinearChartSettingsInfoPopup {
        /** Advanced settings relevant to info popup appearance. */
        advanced?: {
            /** Create custom info contents to display in info popup. */
            contentsFunction?: (
                /** Data for the info popup */
                data: Array<LinearChartSeriesStackData>, 
                /** The configuration of the series object currently under the cursor */
                series: LinearChartSettingsSeries, 
                /** The range for which the info popup is being built. */
                range: [number, number], apis: {
                    /** Calculate the series color that would normally be used */
                    computeSeriesColor: (group: LinearChartSeriesStackData, series: LinearChartSeriesStackDataItem, seriesIndex: number, value: number) => string;
                    /** Calculate the text shadow that would normally be used */
                    computeTextShadow: (group: LinearChartSeriesStackData, series: LinearChartSeriesStackDataItem, seriesIndex: number, color: string) => string;
                }) => string | HTMLElement;
            /** Controls how the selection for the info popup is created and what data is displayed. */
            scope?: "stack" | "value" | "auto";
            /** Specifies if the default header should be included. If set to `false`, the `contentsFunction` should be used to return the header as well. */
            showHeader?: boolean;
            /** Whether to show only the series under cursor in info popup. If `scope` is set to `value` then the info popup will be empty unless the pointer
            hovers over the value bar/line. */
            showOnlyHoveredSeries?: boolean;
            /** Function to determine what order the series are displayed in.
            indexA and indexB give the order the series were originally
            specified in. */
            sortFunction?: (a: LinearChartSettingsSeries, b: LinearChartSettingsSeries, indexA: number, indexB: number) => number;
        };
        /** List of aggregations that will be shown in the info popup for each series. If none are specified, info popup displays the aggregation
        that is specified in the series data configuration.
        Available aggregations: sum (default), count, first, last, min, max, avg, change */
        aggregations?: Array<string>;
        /** Custom containing div for the info popup */
        container?: string | HTMLElement;
        /** Show/hide info popup */
        enabled?: boolean;
        /** Specifies the position of the info popup.
        
        Values:
        - `inside` - Displays the info popup inside the chart area right below the toolbars. This is the default behavior which is well suited for larger charts.
        - `outside` - Displays the info popup above the chart area. This mode is intended for very small charts where the info popup would overlap the whole chart. */
        position?: "outside" | "inside";
        /** Whether to show the info popup at the data point itself */
        showAtDataPoint?: boolean;
        /** Whether to show series with no data in hovered time period. */
        showNoData?: boolean;
        /** Whether to show series with null data in the hovered time period. */
        showNullData?: boolean;
        /** Whether to show series with data equal to zero in hovered time period. */
        showZeroData?: boolean;
        /** Info popup style. */
        style?: {
            /** Style used to highlight the values that are shown in the info popup. */
            highlight?: LinearChartSettingsHighlightStyle;
        };
        /** Specifies if the value label render the stacked value (the sum of
        all values below it) or just the individual value of the particular
        series.
        
        Default value `null` means that the stacked value is used unless the
        stack type is set to `based`. */
        useStackedValue?: boolean;
        /** Prepare custom format values to display in info popup. */
        valueFormatterFunction?: (
            /** object containing {sum, min, max, first, last, count, avg, change} */
            values: LinearChartSeriesStackDataItemValues, 
            /** series object for the value */
            series: LinearChartSettingsSeries) => string;
    }
    export interface LinearChartSettingsInteraction extends BaseSettingsInteraction {
        /** Specifies if the bottom axis should be completely ignored for all interaction mouse and touch events. */
        ignoreBottomAxis?: boolean;
        /** Configurable settings to manage scroll interaction. */
        scrolling?: LinearChartSettingsInteractionScrolling;
        /** Sensitivity of Left/Right/Up/Down swipes. Note that `scrolling.swipePageFlipping` must be `true` for this to have any effect. */
        swipeSensitivity?: number;
        /** Configurable settings to enhance and alleviate zoom interaction. */
        zooming?: LinearChartSettingsInteractionZooming;
    }
    export interface LinearChartSettingsInteractionScrolling {
        /** Enables/Disables scrolling. */
        enabled?: boolean;
        /** Scrolling friction coefficient (chartWidth/ms^2). */
        kineticFriction?: number;
        /** The maximum time the scroll animation can run, in milliseconds. This does not apply when the user swipes the chart to start
        the animation, for that use `kineticFriction` instead. This setting however applies when the visible range is changed by using the toolbar
        or API methods.
        
        Set to `null` to disable the limit. */
        maxAnimationLength?: number;
        /** Whether to use scrolling by full page instead of kinetic scrolling when using swipes (instead of dragging the chart). */
        swipePageFlipping?: boolean;
    }
    export interface LinearChartSettingsInteractionZooming {
        /** If set to `false`, all zoom gestures will be disabled, irrespective of how the other properties are configured.
        Note that the user will still be able to zoom by drill-down (clicking on values) and by using toolbar. */
        enabled?: boolean;
        /** Whether to zoom by two finger pinch. */
        fingers?: boolean;
        /** Max zoom difference when using pinch gesture. */
        fingersMaxZoom?: number;
        /** Zooming sensitivity for swipe gestures. Bigger values correspond to faster zooming. */
        sensitivity?: number;
        /** Whether to zoom by swiping up or down. */
        swipe?: boolean;
        /** How far pointer must be moved up or down in pixels before zooming activates. */
        upDownTreshold?: number;
        /** Whether to zoom by mouse wheel. */
        wheel?: boolean;
        /** Zooming sensitivity for mouse wheel. Bigger values correspond to faster zooming. Must be `>= 1.1` */
        wheelSensitivity?: number;
        /** Zoomed area is highlighted if zoom is changed more number of times than this. */
        zoomHighlightThreshold?: number;
    }
    export interface LinearChartSettingsLegend extends BaseSettingsLegend {
        /** Advanced settings which may change in the future. */
        advanced?: LinearChartSettingsLegendAdvanced;
        /** Visual element of legend entry with appropriate style to a slice color it corresponds. The content of each legend marker is the
        same as info popup appearing while hovering on slice. */
        marker?: LinearChartSettingsLegendMarker;
        /** Legend enclosing panel settings. */
        panel?: BaseSettingsLegendPanel;
    }
    export interface LinearChartSettingsLegendAdvanced extends BaseSettingsLegendAdvanced {
        /** Style for legend entry when a disabled series is displayed. */
        disabledSeries?: {
            fillColor?: string;
            lineColor?: string;
            textColor?: string;
        };
        legendSortFunction?: (a: LinearChartSettingsSeries, b: LinearChartSettingsSeries) => number;
    }
    export interface LinearChartSettingsLegendMarker extends BaseSettingsLegendMarker {
        /** Specifies the shape for markers in the legend. If the value is `null` then the small icon representing the series is drawn. */
        shape?: "triangle" | "square" | "rhombus" | "triangle2" | "circle";
    }
    export interface LinearChartSettingsLocalization extends BaseSettingsLocalization {
        /** Text to show on the info popup when there is no data in the selected range. */
        noDataLabel?: string;
        /** Strings used in toolbars. */
        toolbar?: LinearChartSettingsLocalizationToolbar;
        /** Default name for series shown in info popup and legend. Note that info popup will not use it if only a single series is being used. */
        unnamedSeries?: string;
        /** Map from unit prefix to multiplier. Used for value axis formatting. */
        valueUnits?: Dictionary<number>;
    }
    export interface LinearChartSettingsLocalizationToolbar extends BaseSettingsLocalizationToolbar {
        /** Linear mode button text. */
        linButton?: string;
        /** Lin/Log button title. */
        linLogTitle?: string;
        /** Logarithmic mode button text. */
        logButton?: string;
    }
    export interface LinearChartSettingsSeries {
        /** Name to show in the info popup when some aggregation has occurred. */
        aggregatedName?: string;
        /** Cluster identifier. Columns with the same cluster id will be placed in same cluster. */
        cluster?: string;
        /** Data manipulation settings used for default series. */
        data?: LinearChartSettingsSeriesData;
        /** Enable/disable series. */
        enabled?: boolean;
        /** Whether series remains enabled in aggregated views */
        enabledWhenAggregated?: boolean;
        /** Whether series remains enabled in non-aggregated views */
        enabledWhenNotAggregated?: boolean;
        /** A field that can be used to store any additional data with the series object. This can be useful in situations when the
        data is required in event handlers, such as `onClick` when the event arguments contain the configuration of the series that
        was hovered or clicked. This value is copied by reference. */
        extra?: any;
        id?: string;
        /** Disables series rendering, but otherwise process it as normal.
        Useful if the series still needs to influence e.g. the value axis
        size, or be present in the legend or tooltip. */
        invisible?: boolean;
        /** Group ID for legend. Items in the same group have a different toggle behavior. When all the items in a group are enabled,
        clicking an item causes that item to stay enabled and all other items are disabled. Clicking it again enables all items
        again. Consequently, at least one item in each group is always enabled. The exception to this is if the group ID is null
        (no group) or the group contains only one item. Then the item is toggled on/off individually. */
        legendGroupId?: string;
        /** How enabling/disabling grouped legend items should behave */
        legendGroupMode?: "toggle";
        /** Name to show in the info popup. The same value is also used in the legend unless `nameLegend` is also set. */
        name?: string;
        /** Name to show in the legend. If not specified, value from the `name` property is shown. */
        nameLegend?: string;
        /** Whether to show the series name  info popup. */
        showInInfoPopup?: boolean;
        /** Whether to show the series name in legend. */
        showInLegend?: boolean;
        /** Stack identifier. Series with same stack ID are placed in the same stack. Define a stack with the same identifier to tune the stack. */
        stack?: string;
        /** Custom style based on series type. See the documentation of the derived classes for available properties. */
        style?: LinearChartSettingsSeriesStyle;
        /** Series type. */
        type?: "candlestick" | "columns" | "line";
        /** Name of the unit of data for the series in the info tooltip. */
        unitName?: string;
        /** ID of value axis that this series will use.
        Maps to a configuration specified in [valueAxis](full-reference/LinearChartSettings.html#doc_valueAxis) property. */
        valueAxis?: string;
    }
    export interface LinearChartSettingsSeriesCandleStick extends LinearChartSettingsSeries {
        /** Info popup localizeable strings */
        localization?: {
            close?: string;
            high?: string;
            low?: string;
            open?: string;
        };
        /** Custom style based on series type. See the documentation of the derived classes for available properties. */
        style?: LinearChartSettingsSeriesCandleStickStyle;
    }
    export interface LinearChartSettingsSeriesCandleStickStyle extends LinearChartSettingsSeriesStyle {
        /** Item style when open is higher than close */
        decrease?: LinearChartSettingsCandleStickMotionStyle;
        /** Item style when open is smaller than close */
        increase?: LinearChartSettingsCandleStickMotionStyle;
        /** Item left and right padding */
        padding?: [number, number];
        /** Candlestick item representation pattern where difference is wethter to show body part */
        pattern?: "candlestick" | "bar";
    }
    export interface LinearChartSettingsSeriesColumns extends LinearChartSettingsSeries {
        /** Default column style. */
        style?: LinearChartSettingsSeriesColumnsStyle;
        /** Controls if and how the value label for the total of the series is
        displayed on the chart */
        totalValueLabel?: LinearChartSettingsTotalValueLabel;
        /** Controls if and how the value labels for each column is displayed on the chart. */
        valueLabels?: LinearChartSettingsValueLabels;
    }
    export interface LinearChartSettingsSeriesColumnsStyle extends LinearChartSettingsSeriesStyle {
        /** Padding for cluster. 0th element - left padding, 1st element - right padding. */
        clusterPadding?: [number, number];
        /** Which logical grouping to use for drawing connector lines */
        connectorLineID?: string;
        /** Where to start drawing the connecting line */
        connectorLinePositionX?: "edge" | "center" | "full";
        /** Depth for column. Use it to achieve 3D effect. */
        depth?: number;
        /** Brightness applied to depth components. */
        depthBrightness?: number;
        /** Whether to draw an outline around the columns */
        enableOutlineLines?: boolean;
        /** Fill gradient orientation for manual fill gradient mode. In use with fillGradient property.
        "null" for default fillGradient mode, "vertical" for vertical gradient, "horizontal" for horizonal rendering" */
        fillGradientMode?: "vertical" | "horizontal";
        /** Fill gradient type lets you have automated fillGradient steps based on different shapes.
        Supported types are: null | cylinder */
        fillGradientType?: "cylinder";
        /** A linear gradient for color change along a line between the column bottom and upper side.
        Specify "1" for no gradient. Values 0..` will make the bottom part of columns slightly darker. */
        gradient?: number;
        /** Outline color. */
        lineColor?: string;
        /** Minimum height of a column in px. */
        minHeight?: number;
        /** Padding for column. 0th element - left padding, 1st element - right padding. */
        padding?: [number, number];
        /** Radius for top-left, top-right, bottom-right, bottom-left corner */
        radius?: [number, number, number, number];
        /** Shadow blur effect range. */
        shadowBlur?: number;
        /** What factor to scale the column widths by, between 0.0 and 1.0.
        
        If set to 0, the columns will be drawn as lines instead of columns. */
        widthScale?: number;
    }
    export interface LinearChartSettingsSeriesData {
        /** Prepare displaying value after data aggregation. */
        aggregatedValueFunction?: (
            /** aggregated value that is about to be displayed */
            value: number, 
            /** time display unit time stamp in ms */
            time: number, 
            /** display unit */
            units: string) => number;
        /** Aggregation function to use. Used when data source does not provide data in needed display unit.
        Note that when `avg` is used, you should provide `countIndex` so that
        the calculation is correct even across multiple units.
        - "max-threshold" modes finds the largest value that is at least X% of
        the data range; otherwise finds the minimum. X% is set with the
        'percentile' setting. */
        aggregation?: "sum" | "min" | "max" | "first" | "last" | "avg" | "percentile" | "count";
        /** When given, then "aggregationFunction" is
        called to generate the value of each displayed data point instead of
        the fixed function specified by "aggregation". */
        aggregationFunction?: (
            /** Unit to aggregate to */
            displayUnit: string, 
            /** Initial time for current data item */
            fromTime: number, 
            /** Final time for current data item */
            toTime: number, 
            /** All data values in the time range */
            intervalValues: Array<number>, 
            /** All data counts in the time range */
            intervalCounts: Array<number>) => [number, number];
        /** If true, zero mode sets every null to zero regardless of data range.
        If false, zero mode only sets nulls within the data range to zero */
        alwaysZeroMode?: boolean;
        /** Method used to fill in time intervals that have no data. Used only for line series. */
        noDataPolicy?: "join" | "skip" | "zero";
        /** Controls the percentile level for percentile and threshold
        aggregation modes. */
        percentile?: number;
        /** Data source to use if multiple data sources are available. */
        source?: string;
        /** Retrieves the individual value used for calculations from the data array. This is an alternative for specifying `index`. */
        valueFunction?: (
            /** entry in data values array where the value at index 0 is the timestamp */
            data: Array<number>) => number;
    }
    export interface LinearChartSettingsSeriesLines extends LinearChartSettingsSeries {
        /** Default style for line type series. */
        style?: LinearChartSettingsSeriesLinesStyle;
        /** Controls if and how the value label for the total of the series is
        displayed on the chart */
        totalValueLabel?: LinearChartSettingsTotalValueLabel;
        /** Controls if and how the value labels for each line is displayed on the chart. */
        valueLabels?: LinearChartSettingsValueLabels;
    }
    export interface LinearChartSettingsSeriesLinesStyle extends LinearChartSettingsSeriesStyle {
        /** How much to scale the width of a column generated by the "column" degenerateLinePolicy */
        degenerateLineColumnWidthScale?: number;
        /** What to do if a line only has a single point. */
        degenerateLinePolicy?: "point" | "zero" | "column";
        /** Marker highlight data points on line. They can be in different sizes, shapes and colors. */
        marker?: LinearChartSettingsSeriesStyleMarker;
        /** Enables customizing the marker for each particular data point. The function receives an array of all horizontal indices that are being painted and
        an array of vertical positions for each marker. Both arrays have the same length.
        
        The output has to be an array of the same length where each entry represents a marker that will be drawn for that value. If the array contains a `null` value
        that specific marker is not drawn.
        
        Note that this method is not used when the marker is drawn for the legend entry.
        
        This method will be invoked on each frame so it is important that it is optimized for performance. */
        markerStyleFunction?: (source: Array<any>, verticalPositions: Array<number>) => Array<LinearChartSettingsSeriesStyleMarker>;
        /** Shadow blur radius. */
        shadowBlur?: number;
        /** Whether to draw smoothed line. */
        smoothing?: boolean;
        /** Whether to draw the line using horizontal segments instead of oblique. */
        steps?: boolean;
    }
    export interface LinearChartSettingsSeriesStyle {
        depth?: number;
        /** Fill color. */
        fillColor?: string;
        /** Fill gradient. Allows building a gradient fill, bound to values. Contains array of value-color pairs.
        For example: [[-20, 'rgba(0,0,255,0.4)'],[30,'rgba(255,0,0,0.7)']].
        If specified fillGradientMode: "horizontal" or "vertical", then value denotes fraction of the column width and must be in interval from 0 to 1
        For example: [[0,"black"],[0.5,"red"],[1, "orange"]]. */
        fillGradient?: GradientDefinition;
        /** Fill gradient orientation for manual fill gradient mode. In use with fillGradient property.
        "null" for default fillGradient mode, "vertical" for vertical gradient, "horizontal" for horizonal rendering" */
        fillGradientMode?: "vertical" | "horizontal";
        /** Specifies the URL to the image that will be used as the repeated fill pattern for the series.
        
        When `fillPattern` is specified, `fillGradient` is ignored. If `fillColor` is specified together with `fillPattern`, it will be
        used as the background color for the pattern. */
        fillPattern?: string;
        /** Style settings for the legend item that is rendered for the series. */
        legend?: {
            /** Configures the marker that is shown in the legend. Note that the default (`shape: null`) means that instead of the
            plain marker, an icon representing the series visual style will be used. */
            marker?: LinearChartSettingsSeriesStyleMarker;
            /** The color used for the label of the legend item. Note that for disabled series [`advanced.disabledSeries.textColor`][1] takes precedence.
            
            [1]: time-chart/api-reference/settings/legend/advanced/disabledSeries/textColor.html */
            textColor?: string;
        };
        lineColor?: string;
        /** Array of line dash pattern to have a dashed line. The array contains length of dash followed by length of space in pixels.
        A sequence of multiple dash-space values is supported. In case you want to set a solid line, pass empty array: [] */
        lineDash?: Array<number>;
        /** Start offset of line dash, in pixels */
        lineDashOffset?: number;
        /** Line gradient. Allows building a gradient line, bound to values. Contains array of value-color pairs.
        For example: [[-20, 'rgba(0,0,255,0.4)'],[30,'rgba(255,0,0,0.7)']].
        If specified lineGradientMode: "horizontal" or "vertical", then value denotes fraction of the column width and must be in interval from 0 to 1
        For example: [[0,"black"],[0.5,"red"],[1, "orange"]]. */
        lineGradient?: GradientDefinition;
        /** Line gradient orientation for manual line gradient mode. In use with lineGradient property.
        "null" for default lineGradient mode, "vertical" for vertical gradient, "horizontal" for horizonal rendering" */
        lineGradientMode?: "vertical" | "horizontal";
        /** Width of the line. */
        lineWidth?: number;
        /** Shadow color of column. If undefined, no shadow will be applied. Leave empty to use default shadow or set your own shadow color. */
        shadowColor?: string;
        /** Shadow direction, x component. */
        shadowOffsetX?: number;
        /** Shadow direction, y component. */
        shadowOffsetY?: number;
        /** The series color in the tooltip. 'null' automatically determines
        based on existing color settings */
        tooltipColor?: string;
        /** A gradient range for tooltip color. Allows building a gradient fill,
        bound to values. In the case of tooltip, the tooltip will still be
        rendered with a solid color, but this allows easily specifying different
        colors depending on the tooltip value. Contains array of value-color pairs.
        For example: [[-20, 'rgba(0,0,255,0.4)'],[30,'rgba(255,0,0,0.7)']].
        If specified fillGradientMode: "horizontal" or "vertical", then value denotes fraction of the column width and must be in interval from 0 to 1
        For example: [[0,"black"],[0.5,"red"],[1, "orange"]]. */
        tooltipGradient?: GradientDefinition;
        /** What color the tooltip shadow is, as a CSS size string */
        tooltipShadowBlur?: string;
        /** What color the tooltip shadow is, as a CSS color */
        tooltipShadowColor?: string;
        /** The maximum level of tooltip color lightness where a shadow will be
        drawn, between 0 and 1. Shadow will still be drawn if it is within
        the other threshold. */
        tooltipShadowLightnessMaxThreshold?: number;
        /** The minimum level of tooltip color lightness for a shadow to be
        drawn, between 0 and 1. Shadow will still be drawn if it is within
        the other threshold. */
        tooltipShadowLightnessMinThreshold?: number;
        /** How big the tooltip shadow is, as a CSS size string */
        tooltipShadowSize?: string;
    }
    export interface LinearChartSettingsSeriesStyleMarker {
        /** Marker fill color. If this is not set, then the line color or the fill color of the series is used instead. Use `transparent` to use transparent fill color. */
        fillColor?: string;
        /** Marker fill gradient. If this is not set, then the fillColor will be
        used instead. */
        fillGradient?: GradientDefinition;
        /** How to use the gradient value to determine fill color.
        If "none" or not given, then gradient is drawn directly
        If "clamp", then use a single solid color based on gradient position */
        fillGradientClampMode?: string;
        /** The line color for the marker shape. */
        lineColor?: string;
        /** Marker line gradient. If this is not set, then the lineColor will be
        used instead. */
        lineGradient?: GradientDefinition;
        /** The width of the outline for the marker shape. */
        lineWidth?: number;
        /** Specify the shape of markers on the line. */
        shape?: "triangle" | "square" | "rhombus" | "triangle2" | "circle";
        /** The width of the marker. In case when circle - interpreted as the diameter. */
        width?: number;
    }
    export interface LinearChartSettingsStack {
        /** Whether to fill the entire area under each series or only the
        difference between it and the series below.
        
        The default is `true` for based stacks and `false` for everything
        else. */
        drawFullArea?: boolean;
        /** The display name in info popup. */
        name?: string;
        /** Whether to separate negative values.
        
        The default is `false` for line series but `true` for other series types. */
        separateNegativeValues?: boolean;
        /** Different representation of stacked series values. */
        type?: "normal" | "proportional" | "based";
    }
    export interface LinearChartSettingsTotalValueLabel {
        /** Whether to allow skipping  some labels if there isn't enough space
        to draw any labels at all */
        allowLabelSkip?: boolean;
        /** Prepare custom content to display in value label along with numeric value.
        If this callback is not defined, then floating value is formatted with two digits after the decimal point and integer values are formatted without decimal digits.
        If this callback returns `null` or `undefined` for the given value, it won't be created. Note that `null` values are never passed to the callback. Usage example:
        ```javascript
        contentsFunction: function(value) { return value.toFixed(2) + "$"; }
        ``` */
        contentsFunction?: (
            /** The value which has to be formatted. */
            value: number, 
            /** The horizontal position (timestamp for TimeChart and item index for FacetChart) where the label is located. */
            position: number, series: LinearChartSettingsSeriesColumns | LinearChartSettingsSeriesLines, index?: number) => string;
        /** Whether to show series data labels. */
        enabled?: boolean;
        /** The font size will be used as defined in `series.valueLabel.style`.
        However, if the available space is too narrow, font size will be gradually reduced to the minimum font size.
        If the minimum font size still does not fit, the values won't be displayed.
        
        Note that this value must match the units that is being used in the `style.textStyle.font` setting. For example,
        if the font is specified as `2em Arial` then this should be adjusted to, for example, 0.5, since the default value
        is tailored for font sizes in pixels. */
        minFontSize?: number;
        /** Value label position in perspective to the series data point. Note that in all of the inside options 
        automatically reduce the font size (based on `minFontSize` setting) in situations when the height of the 
        column or line area does not provide enough room for full-size labels.
        
        ![Value label possible positions](images/valueLabelPosition.png) */
        position?: "outside" | "outsideTop" | "outsideBottom" | "aboveValue" | "value" | "belowValue" | "insideTopAuto" | "insideTop" | "insideCenter" | "insideBase";
        /** Whether to skip drawing labels for null values */
        showNullData?: boolean;
        /** Whether to skip drawing labels for zero values */
        showZeroData?: boolean;
        /** Data label text style. */
        style?: BaseSettingsLabelStyle;
        /** Specifies if the value label render the stacked value (the sum of all values below it) or just the individual value
        of the particular series.
        
        Default value `null` means that the stacked value is used unless the stack type is set to `based`. */
        useStackedValue?: boolean;
        /** Value label horizontal position in perspective to the series data point. */
        xPosition?: "center" | "insideRight" | "right" | "centerRight" | "outsideRight" | "insideLeft" | "left" | "centerLeft" | "outsideLeft";
    }
    export interface LinearChartSettingsValueAxis {
        /** Whether to align the zero value with other axes */
        alignZero?: boolean;
        /** Always animate value axis */
        animate?: "auto" | "always";
        /** Whether to show vertical line along value axis */
        axisLine?: boolean;
        /** Show/hide value axis. */
        enabled?: boolean;
        /** Whether to force top and bottom values in the hgrid. */
        forceTopAndBottomValues?: boolean;
        /** Amount to inset the forced min/max values */
        forcedMinMaxInset?: number;
        /** Additional offsets for forced top and bottom values */
        forcedTopAndBottomOffsets?: Array<number>;
        /** Placement of grid lines in relation to series data. */
        gridPosition?: "above" | "under";
        /** Whether to show horizontal grid lines. Specifying `null` means that only the first value axis will show the horizontal lines,
        all other axis will not. */
        hgrid?: boolean;
        /** Whether to hide the valid axis when it is not valid */
        hideInvalidAxis?: boolean;
        /** This parameter works together with `animate` when it's set to "always" as here you can define fixed initial value that should be used for animation beginning.
        If set to 0, then animation would be with "dropping" effect. If set to larger value than your maximum series value, then effect would be "growing".
        If you want animation value to be calculated automatically depending on your data, keep default value and adjust `initialAnimationValueMultiplier`. */
        initialAnimationValue?: number;
        /** This parameter works together with `animate` when it's set to "always". It's used for multiplying maxium series value to get "growing" or "dropping" animation effect.
        By default (if initial animation is turned on) there would be "growing" effect. You can increase this value if you need "further growing".
        To make "dropping" effect you should use values less than 1, (for example: 0.45).
        Also adjust `scaleAdjustmentAnimationDelay` to make animation longer. */
        initialAnimationValueMultiplier?: number;
        /** Whether to use logarithmic scale. */
        logScale?: boolean;
        /** Fixed maximum value for value axis. If not set it will be computed automatically from visible data and zeroLine settings. */
        maxValue?: number;
        /** Fixed minimum value for value axis. If not set it will be computed automatically from visible data and zeroLine settings. */
        minValue?: number;
        /** Only draw the top and bottom labels */
        onlyPaintMinMax?: boolean;
        /** Only draw non-redundant labels */
        onlyPaintUniqueLabels?: boolean;
        /** Location of the value axis. */
        position?: "inside" | "outside";
        /** The animation easing function. */
        scaleAdjustmentAnimation?: "=" | "<>";
        /** Scale adjustment animation duration. */
        scaleAdjustmentAnimationDelay?: number;
        /** This tolerance specifies how big that part is as fraction of total chart height. When part of the vertical space
        is not used chart scale is automatically adjusted. */
        scaleAdjustmentTolerance?: number;
        /** Smallest difference between two labels. For example, use 1 to disallow the labels to go into fractions. */
        scaleMinStep?: number;
        /** Difference between two values on the axis. If not set (default), will be automatically calculated from chart height, min,
        max value and style.labelSpacing. */
        scaleStep?: number;
        /** Value axis side in chart. Possible values: "left" or "right". */
        side?: "right" | "left";
        /** Fixed width of the value axis. If not set it will be computed automatically from font size. */
        size?: number;
        /** How to scale units when snapping to simple fractions. 
        Normally, values on a linear scale are snapped to 1, 2, 2.5, 5, or
        10 unit.
        For example if a value of 9 snaps to 10 with snapScale 1, then with 
        snapScale 3, the linear scale will snap (9/3)=3 to (5*3)=15 */
        snapScale?: number;
        /** Style for parts of value axis. */
        style?: {
            /** Whether label spacing should automatically scale with font size */
            autoScaleLabelSpacing?: boolean;
            /** Rendering style for the vertical line along value axis. */
            axisLine?: BaseSettingsLineStyle;
            /** Base line settings. It is the horizontal line showing zero value. */
            baseLine?: LinearChartSettingsValueAxisBaseLineStyle;
            /** Horizontal grid lines. */
            hgrid?: BaseSettingsLineStyle;
            /** Distance between value axis labels. */
            labelSpacing?: number;
            /** How label spacing is used */
            labelSpacingMode?: "fixed" | "auto";
            /** Value axis tick lines style. */
            tick?: BaseSettingsLineStyle;
            /** Title text for the value axis. */
            title?: BaseSettingsValueAxisTitleStyle;
            /** Value axis label rendering settings. */
            valueLabel?: BaseSettingsLabelStyle;
        };
        /** Provides the ability to draw threshold guidelines and fill background areas for certain values. For example, this can be used
        to highlight an area that exceeds certain limit. */
        thresholds?: Array<BaseSettingsValueAxisThreshold>;
        /** Title text for the value axis. */
        title?: string;
        /** Following formats are supported:
        
        ^0([.,]0+)?( ?%)                  - percentage
        ^([^0-9]+)?0?([.,]0+)?([^0-9]+)?  - currency */
        valueFormat?: string;
        /** Prepare custom format values to display in value axis. If using this, consider also setting the `size` parameter to
        accommodate your label size. */
        valueFormatterFunction?: (
            /** numerical value to display */
            value: number, 
            /** name of multiplier - 'K' for thousands, 'M' for millions */
            unitName: string, 
            /** multiplier value - 1000 for thousands, 1 000 000 for millions */
            unitValue: number, 
            /** value string that is displayed by default */
            name: string, 
            /** additional metadata for advanced use cases */
            extra?: any) => string;
        /** Zero line. */
        zeroLine?: "visible" | "center" | "floating";
    }
    export interface LinearChartSettingsValueAxisBaseLineStyle extends BaseSettingsLineStyle {
        depthColor?: string;
        lineDepth?: number;
        /** Specifies when the label for the zero line is rendered. */
        showLabel?: BaseSettingsValueAxisBaseLineLabelMode;
    }
    export interface LinearChartSettingsValueLabels extends LinearChartSettingsTotalValueLabel {
        /** Whether to draw overlapping value labels or not */
        allowOverlap?: boolean;
        /** Whether overlapping labels can be drawn in a stack instead if
        overlap is disallowed */
        allowOverlappingLabelStacking?: boolean;
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
        /** Determines how much the center of the nodes can move before auto
        zoom updates.
        
        The default value is 1.0, meaning it must move by an amount equal to
        the padding before the auto zoom updates. Lower values, down to 0
        will update with smaller moves, while larger values will require more
        significant movement before auto zoom updates. */
        autoZoomCenterOffsetTolerance?: number;
        /** Determines how far nodes are allowed to move inwards, creating more * than the optimal amount of padding, before auto zoom updates.
        
        If auto zoom always updates when there is more than the optimal amount
        of padding, then this can create an undesirable "trembling" as auto
        zoom might constantly update if e.g. a boundary node is moving
        inwards.
        
        The default value is 1.0, meaning it must move inwards by an amount
        equal to the padding before the auto zoom updates. Lower values, down
        to 0 will update with smaller moves inwards, while larger values will
        require more significant inward movement before auto zoom updates.
        
        The threshold is calculated as:
        `1.0 + (autoZoomExcessivePaddingTolerance * padding)` */
        autoZoomExcessivePaddingTolerance?: number;
        /** Zoom value limits for automatic zooming (for example, "Fit to screen"). Contains array of [min, max] values.
        
        If the minimum (the first value) is specified as `null`, the chart will not enforce it, instead it will be adjusted as needed
        if the network grows very large. Note that specifying `null` as the minimum also overrides the minimum for the `zoomExtent`
        value. */
        autoZoomExtent?: [number, number];
        /** The acceleration of scene movement, when trying to contain all nodes within the view,
        when autozoom is enabled. Increasing the value decreases latency, and makes the animation
        more responsive. Decreasing the value makes the animation more fluid */
        autoZoomPositionElasticity?: number;
        /** Controls the percentage of how much of the chart width/height the
        nodes can move around without triggering automatic zoom adjustment. A
        value of 0.9 means that the target is to leave 10% padding on all sides
        of the chart. However once the target  is reached, if the nodes move
        within these 10% on either side, the zoom adjustment is not performed.
        
        Note that this is a percent of the *data size*, not the *screen size*.
        For example, if the value is 0.2, then by the logic above this means the
        target is to leave 80% padding on all sides. This does *not* mean that
        80% of the chart will be white space and all of the data will be stuffed
        in the middle 20%. Rather, it means that the screen will be fit as if
        the data was 80% wider and taller than it really is. For instance, if
        the data would normally fit in a 1000x1000 box, then the screen would
        fit to a 1700x1700 box with the data in the middle 1000x1000. */
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
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface PieChartChartClickEventArguments extends PieChartChartEventArguments {
        /** Contains the label object that was clicked or `null` if none was. */
        clickLabel: BaseLabel;
        /** Specifies the source of the click event. */
        clickOrigin: "back" | "slice" | "label" | "insideLabel" | "legend";
        /** Contains the pie that was clicked. It is possible that this is set while `clickSlice` is not if the small
        pie in the center of the chart (under the `Back` button) is hovered. */
        clickPie: PieChartPie;
        /** Contains the slice that was clicked. Note that this will also be populated when the label
        of the slice is clicked. */
        clickSlice: PieChartSlice;
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface PieChartChartEventArguments extends BaseChartEventArguments {
        /** The total number of slices currently visible (without counting `Previous` and `Others`). */
        count: number;
        /** Contains the label object if one is currently hovered, `null` otherwise. */
        hoverLabel: BaseLabel;
        /** Contains the currently hovered pie. This can be set while `hoverSlice` is not if the small
        pie in the center of the chart (under the `Back` button) is hovered. */
        hoverPie: PieChartPie;
        /** Contains the currently hovered slice. Note that this will also be populated when the label
        of the slice is hovered. */
        hoverSlice: PieChartSlice;
        /** 
        @deprecated use `hoverLabel` instead. */
        label: BaseLabel;
        /** The number of slices that are hidden in the `Previous` slice.
        
        This will be `null` if the chart has not been rendered. */
        offset: number;
        /** The currently open pie object of the chart. */
        pie: PieChartPie;
        /** A list of currently selected slices. Note that changes to this array does not result in 
        changes to the selection, use [`selection()`](pie-chart/api-reference/api.html#selection) API 
        method for that. */
        selection: Array<PieChartSlice>;
        /** 
        @deprecated use `hoverSlice` instead. */
        slice: PieChartSlice;
    }
    /** Describes a single slice in the data. Can include the nested items for that slice as well. */
    export interface PieChartDataObject extends PieChartDataObjectCommon {
        /** The ID of the slice. Note that if the ID is set then by default the chart assumes that the
        slice is expandable. To avoid this, set `style.expandable` to `false`.
        The slice ID is used to load the nested items and is the same value as the ID of the inner pie
        object. */
        id?: string;
        /** The name of the slice that will be used as the default label text. */
        name?: string;
        /** The name of the slice that will be displayed in the legend. If this is not set, the slice label
        is used and if that is not set, then the `name` property is used instead. */
        nameLegend?: string;
        /** Styles specific to the particular slice. */
        style?: PieChartSettingsSliceStyle;
        /** Optional subvalues for drilldown. If subvalues are available, then you can either specify them directly, or provide
        `id` and let the chart request them separately. */
        subvalues?: Array<PieChartDataObject>;
        /** The numeric value of the slice. This is used to calculated the size of the slice. */
        value: number;
    }
    export interface PieChartDataObjectCommon extends BaseDataObjectBase {
        id?: string;
        name?: string;
        subvalues?: Array<PieChartDataObject>;
    }
    export interface PieChartDataObjectRoot extends PieChartDataObjectCommon, BaseDataErrorResponse {
        /** In the case of a partial load, this specifies the sum of all values in the data source which come **after** the values
        in the `subvalues` array. If you're doing a partial load, you must specify at least 2 of the following: `afterSum`,
        `beforeSum`, `sum`. */
        afterSum?: number;
        /** In the case of a partial load, this specifies the sum of all values in the data source which come **before** the values
        in the `subvalues` array. If you're doing a partial load, you must specify at least 2 of the following: `afterSum`,
        `beforeSum`, `sum`. */
        beforeSum?: number;
        /** The ID of the pie for which the data is being loaded. Note that for the initial data request
        this value has to be empty, otherwise the chart assumes that the data is for a nested object and
        not for the initial view. */
        id?: string;
        /** In the case of a partial load, this specifies the maximum number of entries that was fetched from the data source.
        This is used to figure out if more data is available. If this field isn't set, or is set and is larger than the count
        of values in the `subvalues` array, then it is assumed that no more data is available. */
        limit?: number;
        /** The name of the root data object. */
        name?: string;
        /** In the case of a partial load, this specifies the offset in the data source where the `subvalues` array starts. This
        parameter is mandatory if you're doing a partial load. */
        offset?: number;
        /** Values for this drilldown level. In the case of a partial load, this will contain only a part of all values available
        in the data source. */
        subvalues: Array<PieChartDataObject>;
        /** In the case of a partial load, this specifies the sum of all values in the data source. If you're doing a partial
        load, you must specify at least 2 of the following: `afterSum`, `beforeSum`, `sum`. */
        sum?: number;
    }
    export interface PieChartPie {
        active: boolean;
        activeSliceId: string;
        /** Includes all slices that are shown on the screen (including Others/Previous and slices pending removal). */
        allSlices: Array<PieChartSlice>;
        background: boolean;
        brightness: number;
        colorDistribution: string;
        count: number;
        data: PieChartPieData;
        endAngle: number;
        fillColor: string;
        getActiveSlice(): PieChartSlice;
        getCenterX(scene: any): number;
        getCenterY(scene: any): number;
        getInnerRadius(scene: any): number;
        getOuterRadius(scene: any): number;
        id: string;
        innerRadius: number;
        loading: boolean;
        /** Number of slices in the "previous" slice */
        offset: number;
        othersSlice: PieChartSlice;
        parentSlice: PieChartSlice;
        previousSlice: PieChartSlice;
        radius: number;
        removed: boolean;
        /** The speed of the rotation for the pie. Set to `0` to disable rotation and return the pie 
        to its specified `startAngle`. */
        rotationSpeed: number;
        /** Fraction of the total, describing how far the pie has been scrolled with rotational scrolling. */
        scrollOffset: number;
        sliceColors: Array<string>;
        /** Contains the list of slices that excludes the Others/Previous and any slices that are being animated for removal. */
        slices: Array<PieChartSlice>;
        startAngle: number;
        total: number;
        visibleFraction: number;
        x: number;
        y: number;
    }
    /** A cache of raw data. This might contain only a subset of all potentially available values, with more values loaded on demand.
    The already loaded values will be a contiguous subset of all potentially available values. */
    export interface PieChartPieData {
        /** Sum of not yet loaded values which come after the already loaded values. Not used for FacetChart. */
        afterSum: number;
        /** Sum of not yet loaded values which come before the already loaded values. Not used for FacetChart. */
        beforeSum: number;
        /** Whether the already loaded data includes the final slice. Note that it might still not include the first slice. */
        done: boolean;
        /** Additional data that was specified in the data object. */
        extra: any;
        name: string;
        /** Index in the list of all potentially available values, where the already loaded values start. */
        offset: number;
        /** Sum of all potentially available values. Not used for FacetChart */
        total: number;
        /** Count of all potentially available values. Only set after the end has been reached. */
        totalCount: number;
        /** Array of already loaded values */
        values: Array<PieChartDataObject>;
        /** Sum of already loaded values. Not used for FacetChart. */
        valuesSum: number;
    }
    export interface PieChartSettings extends BaseSettings {
        /** Advanced chart settings. Be advised that they are subject to change, backwards compatibility is not guaranteed. */
        advanced?: PieChartSettingsAdvanced;
        /** Settings used to load data into chart. Customise preferred data source feeding methods.
        You can use one of these options: url, data function, preloaded data. */
        data?: Array<PieChartSettingsData>;
        /** The events used to handle user interaction with UI elements. */
        events?: PieChartSettingsEvents;
        /** Configurable conditions to filter the raw data values for subset of drawing slices. */
        filters?: {
            /** Determines if zero values are automatically filtered from the data or if they will be displayed.
            
            Note that if you want to show the empty values in the piechart, it might be useful to set
            [`interaction.others.minSliceFraction`][1] to `0` or [`slice.minFraction`][2] to a value larger than `0`.
            
            [1]: pie-chart/api-reference/settings/interaction/others/minSliceFraction.html
            [2]: pie-chart/api-reference/settings/slice/minFraction.html */
            allowZeroValues?: boolean;
            /** Function to filter visible slices. */
            sliceFilter?: (
                /** slice filtering data */
                sliceData: PieChartDataObject) => boolean;
        };
        /** Slice icons as an additional element of style to highlight each individual slice or groups. */
        icons?: {
            /** Whether to render icons if smaller than min value of sizeExtent. */
            autohideWhenTooSmall?: boolean;
            /** Icon placement method */
            placement?: "auto" | "center";
            /** Min and max value of icon size. The icon size is automatically computed from available space. */
            sizeExtent?: [number, number];
        };
        /** Rising content field while hovering over slice. Content returned in a form of html and is relevant to context of slice hovered. */
        info?: {
            /** Prepare custom info popup contents. May return null and call callback(contents) later. */
            contentsFunction?: (
                /** slice data including subvalues */
                sliceData: PieChartDataObject, 
                /** slice object to apply predefined content */
                slice: PieChartSlice, 
                /** function called to return predefined content */
                callback: (result: string | HTMLElement) => void) => string | HTMLElement;
            /** Show/hide info popup. */
            enabled?: boolean;
        };
        /** Configurable interactivity options to navigate among the slices and pie levels to facilitate analysis of the grouped data in different ways. */
        interaction?: PieChartSettingsInteraction;
        /** Label settings related to internal and external slice text and their connectors. */
        labels?: PieChartSettingsLabels;
        /** The chart legend by additional interactivity to navigate between the slices or hilight each of them. Note that click on entries 
        acts the same way as click on slice and is dependant of chart interaction mode. */
        legend?: PieChartSettingsLegend;
        /** Localizeable strings including export type options and useful default buttons used for chart interaction.
        Buttons like to navigate back, set the chart on full screen and others. */
        localization?: PieChartSettingsLocalization;
        /** Settings to specify initial pie and visible slice offset once the page loaded. */
        navigation?: {
            /** Initial pie drilldown to show. For example ['', 'Firefox', 'Firefox 2.5'] denotes to various browsers grouped by versions. */
            initialDrilldown?: Array<string>;
            /** Initial offset, number of items from start. */
            initialOffset?: number;
        };
        /** Data values arranged in a circular manner. */
        pie?: {
            /** Whether to adapt pie outer radius dynamically to allow enough space for labels. */
            adaptiveRadius?: boolean;
            /** Hovered pie background style. */
            backgroundHoveredStyle?: PieChartSettingsPieStyle;
            /** Pie background style. */
            backgroundStyle?: PieChartSettingsPieStyle;
            /** Pie center margin. */
            centerMargin?: number;
            /** Pie depth - used for raised theme. */
            depth?: number;
            /** End angle of the pie. */
            endAngle?: number;
            /** Pie inner radius. Inner pies are drawn inside this radius. If the value is less than 1, it is multiplied
            by current pie radius to get inner radius. Otherwise it represents the inner radius in pixels. */
            innerRadius?: number;
            /** Inner radius is extended to radius * innerRadiusWhenDrilldown when drilled down. */
            innerRadiusWhenDrilldown?: number;
            /** Pie margin. */
            margin?: number;
            /** Pie style when no data is present. */
            noDataStyle?: PieChartSettingsPieStyle;
            /** Pie outer margin. */
            outerMargin?: number;
            /** Pie outer radius. If not specified, the radius is determined automatically. */
            radius?: number;
            /** The speed of the rotation for the pie. Set to `0` to disable rotation and return the pie 
            to its specified `startAngle`. */
            rotationSpeed?: number;
            /** Whether to show inner pies on chart. */
            showInnerPies?: boolean;
            /** Whether to show inner pies on exported image. */
            showInnerPiesExport?: boolean;
            /** Start angle of the pie. */
            startAngle?: number;
            /** Default pie rendering style. */
            style?: PieChartSettingsPieStyle;
            /** Dynamically determine pie style from data. */
            styleFunction?: (
                /** pie to apply predefined style */
                pie: PieChartPie) => void;
            /** Default pie rendering theme. */
            theme?: "flat" | "bevel" | "can" | "rounded" | "smoothy";
            /** Center X coordinate of the pie chart.
            If the value is 'null' - coordinate is calculated automatically.
            If the value is >1 - it specifies the exact x value in pixels.
            If the value is <=1 - it specifies a fraction of chart width. */
            x?: number;
            /** Center Y coordinate of the pie chart.
            If the value is 'null' - coordinate is calculated automatically.
            If the value is >1 - it specifies the exact x value in pixels.
            If the value is <=1 - it specifies a fraction of chart height. */
            y?: number;
        };
        /** Represents settings for individual slices within each pie. */
        slice?: {
            /** Style to active slices in background (back navigation) pies */
            backgroundActiveStyle?: {
                brightness?: number;
            };
            /** Slice style on background (back navigation) pies. */
            backgroundStyle?: {
                fillColor?: string;
                /** Extra property to alternate fill colors on backgrond slices. */
                fillColor2?: string;
                fillGradient?: GradientDefinition;
            };
            /** Label connector line style. */
            connectorStyle?: BaseSettingsLineStyle;
            /** Expandable slice mark line style */
            expandableMarkStyle?: {
                distance?: number;
                lineColor?: string;
                lineDash?: Array<number>;
                lineWidth?: number;
            };
            /** Hovered slices style. */
            hoverStyle?: PieChartSettingsSliceStyle;
            /** Slice margin. */
            margin?: number;
            /** Controls minimal visual size of slice. Use this to make very small sizes visually bigger. The value represents 
            smallest fraction of a full pie a slice will take. The range is between 0 and 1. For example using 0.05, all slices
            smaller than 5% will be grown up to 5%. Other slices will be made proportionally smaller to accommodate for extra 
            size of small slices. */
            minFraction?: number;
            /** Style for "Others" slice. */
            othersStyle?: {
                fillColor?: string;
                /** Circumference decoration of 'others' slice. */
                lineDecoration?: "zigzag";
            };
            /** Style for the "Previous" slice. */
            previousStyle?: {
                fillColor?: string;
                /** Circumference decoration of 'previous' slice. */
                lineDecoration?: "zigzag";
            };
            /** Selected slices style. */
            selectedStyle?: PieChartSettingsSliceStyle;
            /** Slice style settings */
            style?: PieChartSettingsSliceStyle;
            /** Dynamically determine slice style from data. */
            styleFunction?: (
                /** slice to apply predefined style */
                slice: PieChartSlice, 
                /** slice data including subvalues */
                sliceData: PieChartDataObject) => void;
        };
        /** Theme to apply. You can either use this to share configuration objects between multiple charts or use one of the predefined
        themes. */
        theme?: PieChartSettings;
        /** Adjustable settings to manage default and custom toolbar items, as well as toolbar overall appearance. */
        toolbar?: BaseSettingsToolbar;
    }
    export interface PieChartSettingsAdvanced extends BaseSettingsAdvanced {
        /** Controls visibility of the back icon at the center of pie chart. If true, the back button is always visible, otherwise only on hover. */
        backAlwaysVisible?: boolean;
        /** Image to display for back navigation. */
        backImage?: string;
        /** Background color of the back navigation button. */
        backImageBackground?: string;
        /** 
        @deprecated use the first value of `icons.sizeExtent` setting instead. */
        iconMinSize?: number;
        /** Enables/disables initial zoom-in animation. */
        initialAnimation?: boolean;
        /** Inside labels are not rendered if there is not enough space. So if available space is less than label size * treshold. */
        labelInsideTreshold?: number;
        /** Chart rendering quality. Note that it affects render performance for raised and gradient themes. Range 0 .. 1. */
        renderQuality?: number;
    }
    export interface PieChartSettingsData extends BaseSettingsData {
        /** An array of fields for auto-categorization. For each field a new drilldown sub-level will be created, separated by the values of that field. */
        autoCategories?: Array<string | ((obj: PieChartDataObject) => string)>;
        /** Load more chart data. */
        dataFunction?: (
            /** The ID of the parent slice. `null` when loading the top level data. */
            id: string, 
            /** max number of slices to load on pie */
            limit: number, 
            /** number of slices to skip from start */
            offset: number, 
            /** callback function to execute when data arrived correctly */
            success: (data: PieChartDataObjectRoot) => void, 
            /** callback function to execute when error occure while loading data */
            fail: (result: BaseDataErrorResponse) => void) => void;
        /** Number of slices to request from server. */
        itemsToLoad?: number;
        /** Enables/Disables partial load. Items will be loaded on demand but is not compatible with sortField or autoCategories. */
        partialLoad?: boolean;
        /** Provides the ability to embed chart data directly into the chart configuration.
        
        This data can be complete or act as the initial data where the rest will be requested dynamically using
        `url` or `dataFunction`. */
        preloaded?: PieChartDataObjectRoot;
        /** If set, items will be sorted in descending order using values from this field. You can either specify a single field or an array
        of fields.
        
        To sort the values ascending, prefix the field name with `-`, for example, `-value` (without any spaces).
        
        The default value `null` means that the chart does not reorder the data and it is displayed in the order it is given in the
        data source.
        
        The callback receives two data objects every iteration, return `0` for equal values, `1` if the first value should be before the other
        and `-1` otherwise.
        
        ```javascript
        sortField: function (a, b) {
        // handle null and undefined values as zeroes
        var v1 = a.val || 0;
        var v2 = b.val || 0;
        if (v1 === v2) return 0;
        if (v1 < v2) return 1;
        return -1;
        }
        ``` */
        sortField?: string | Array<string> | ((a: PieChartDataObject, b: PieChartDataObject) => number);
    }
    export interface PieChartSettingsEvents extends BaseSettingsEvents<PieChartChartEventArguments, PieChartChartClickEventArguments> {
        /** 
        @deprecated Use onChartUpdate instead */
        onPieChange?: (
            /** The mouse event. */
            event: MouseEvent, args: PieChartChartEventArguments) => void;
        /** 
        @deprecated Use onChartUpdate instead */
        onPieReadyStateChanged?: (
            /** The mouse event. */
            event: MouseEvent, args: PieChartChartEventArguments) => void;
    }
    export interface PieChartSettingsInteraction extends BaseSettingsInteraction {
        /** Chart animation settings. */
        animation?: {
            /** Duration of hover animation. */
            hoverDuration?: number;
            /** Duration of scroll animation. */
            scrollDuration?: number;
        };
        /** If true, empty donut center area reacts to clicks. */
        coverCenter?: boolean;
        /** Interaction mode. Note that `selection.enabled` can be used to disable the selection completely. */
        mode?: "drilldown" | "select" | "toggle";
        /** Slice including all the values that can not be displayed as a separate slice. Use them to configure 'others' slice rendering space. */
        others?: {
            /** If true, when offset > 0 click on center acts as click on previous slice. */
            centerGoesToPrevious?: boolean;
            /** Enable/Disable Others/Previous slices. */
            enabled?: boolean;
            /** Max size of others slice, as a fraction of 1. If others slice is bigger than this, it will be made smaller and other slices proportionally expanded. */
            maxOthersFraction?: number;
            /** Max number of slices to show. All remaining slices will be replaced by 'Others' slice. */
            maxSlicesVisible?: number;
            /** Minimum slice size as fraction of full pie. All slices smaller than that are replaced with 'Others' slice. */
            minSliceFraction?: number;
            /** Minimum number of slices the pie needs to have for it to show the `Others` slice. Note that
            once this limit is reached the `Others` slice may also contain all but one of the slices - this
            setting does not limit the minimum number of slices that are shown at once in such case.
            
            If you set this property to a value greater than 1, it might be useful to set [`slice.minFraction`][doc]
            to a value of `0.01` or greater.
            
            [doc]: pie-chart/api-reference/settings.html#slice.minFraction */
            minSlices?: number;
            /** Others and Previous slice size as fraction of full pie.
            Previous will always be this big.
            Other will be at least this big but no bigger than maxOthersFraction. */
            navigationFraction?: number;
        };
        /** One of interactivity option to scroll among data. */
        scrolling?: {
            /** Enable/disable scrolling the Other/Previous slices by rotating the chart. */
            enabled?: boolean;
        };
        /** One of interactivity option to use the data selection. */
        selection?: {
            /** Enable/disable selection. */
            enabled?: boolean;
            /** Max cutout distance on swipe. */
            maxSwipeDistance?: number;
            /** Allows partial selecting of slices by gradually dragging them outwards. If this is set to `true`, the slices will not snap to true/false positions 
            instead the API will provide information on how far they were pulled out. */
            partialSwipe?: boolean;
            /** Wether to select slice by swipe. Note that it works independently of selection mode. */
            swipe?: boolean;
            /** Pixels the pointer has to be moved before the motion is recognized as a swipe. */
            swipeSensitivity?: number;
            /** Selection distance tolerance. */
            tolerance?: number;
        };
    }
    export interface PieChartSettingsLabels {
        /** Label rotation angle. */
        angle?: number;
        /** Minimal connector length from slice to label. */
        connectorLength?: number;
        /** Connector line type. */
        connectorType?: "curved" | "straight" | "angled";
        /** Whether to show connector lines for labels. */
        connectors?: boolean;
        /** Show/hide labels. */
        enabled?: boolean;
        /** Whether to include the name in the label */
        includeName?: boolean;
        /** Whether to include the percent in the label */
        includePercent?: boolean;
        /** Inside label placement method. */
        insideLabel?: "always" | "auto" | "append";
        /** Inside label is not shown if the fraction of label that fits inside slice is smaller than this. */
        insideLabelVisibilityFraction?: number;
        /** Min distance between labels, as a fraction of line height. */
        interLabelSpacing?: number;
        labelAppendFunction?: (outerText: string, innerText: string, isRightSide: boolean) => string;
        /** Outside labels placement method. */
        placement?: "aligned" | "wrap";
    }
    export interface PieChartSettingsLegend extends BaseSettingsLegend {
        /** Visual element of legend entry with appropriate style to a slice color it corresponds. 
        The content of each legend marker is the same as info popup appearing while hovering on slice. */
        marker?: PieChartSettingsLegendMarker;
        /** Specifies if the Others and Previous slices should be shown in the legend. */
        showOthers?: boolean;
    }
    export interface PieChartSettingsLegendMarker extends BaseSettingsLegendMarker {
        /** Specifies the shape for color markers in the legend. */
        shape?: "triangle" | "square" | "rhombus" | "triangle2" | "circle";
    }
    export interface PieChartSettingsLocalization extends BaseSettingsLocalization {
        othersLabel?: string;
        previousLabel?: string;
    }
    export interface PieChartSettingsPieMarker extends BaseSettingsBackgroundStyle {
        arrowSize?: number;
        endPosition?: number;
        label?: string;
        labelInside?: boolean;
        labelOffset?: number;
        labelPosition?: "position" | "endPosition" | "midPosition";
        labelStyle?: BaseSettingsLabelStyle;
        mode?: "line" | "arrow" | "tick" | "none";
        position?: number;
        tickLength?: number;
    }
    export interface PieChartSettingsPieStyle {
        background?: boolean;
        /** Pie background brightness. */
        brightness?: number;
        /** Color distribution among slices. */
        colorDistribution?: "list" | "gradientProportional" | "gradient";
        /** Pie background fill color. Useful while pie slices are loading. */
        fillColor?: string;
        /** Color set for pie slices. */
        sliceColors?: Array<string>;
    }
    export interface PieChartSettingsSliceStyle {
        /** Brightness applied to slice line and fill color
        value 0 - black
        value 1 - unchanged
        value 2 - transparent */
        brightness?: number;
        /** Distance how far the slice is moved away from pie. */
        cutoutDistance?: number;
        /** Specifies if the slice is expandable. */
        expandable?: boolean;
        /** Slice fill color. */
        fillColor?: string;
        /** Gradient definition for the pie slice */
        fillGradient?: GradientDefinition;
        /** Icon to display on slice. */
        icon?: string;
        /** Gets or sets the style of the label shown inside the slice. Use `insideLabel.text` to specify the text that will be displayed. */
        insideLabel?: BaseSettingsLabelStyle;
        /** Gets or sets the style of the external label. Use `label.text` to specify the text that will be displayed. */
        label?: BaseSettingsLabelStyle;
        /** Brightness applied to slice line color */
        lineBrightness?: number;
        /** Outline color. */
        lineColor?: string;
        /** Line dash array that is a pattern to get a dashed line. The array contains length of dash followed by length of space. 
        Note that a sequence of multiple dash-space values is supported. */
        lineDash?: Array<number>;
        /** Width of the slice outline. */
        lineWidth?: number;
        /** Specifies markers positioned relative to the pie */
        pieMarkers?: Array<PieChartSettingsPieMarker>;
        /** Specifies markers positioned relative to the slice */
        sliceMarkers?: Array<PieChartSettingsPieMarker>;
        /** Url to open on click. */
        url?: string;
    }
    export interface PieChartSlice {
        active: boolean;
        brightness: number;
        cutoutDistance: number;
        data: PieChartDataObject;
        /** Whether to expand the slice as a default click behavior. */
        expandable: boolean;
        fillColor: string;
        fillColor2: string;
        fillGradient: GradientDefinition;
        /** The fraction of the pie the slice covers. Note that this is represents the visual size,
        not the value - for that you need to use `percent` field. */
        fraction: number;
        hovered: boolean;
        icon: string;
        iconOffset: [number, number, number, number];
        id: string;
        index: number;
        inside: boolean;
        /** Gets or sets the style of the label shown inside the slice. Use `insideLabel.text` to specify the text that will be displayed.
        Note that for backwards compatibility it is possible to set this property to a string directly - in this case the value will be
        written the `insideLabel.text` but also `label.text` will be cleared. */
        insideLabel: BaseSettingsLabelStyle;
        /** 
        @deprecated use `insideLabel` instead. */
        insideLabelStyle: BaseSettingsLabelStyle;
        /** Gets or sets the style of the external label. Use `label.text` to specify the text that will be displayed. */
        label: BaseSettingsLabelStyle;
        /** 
        @deprecated use `label` instead. */
        labelStyle: BaseSettingsLabelStyle;
        lineBrightness: number;
        lineColor: string;
        lineDash: Array<number>;
        lineDecoration: string;
        lineWidth: number;
        /** Contains the original ID that is populated when the slice is being removed. This property
        is important since once the removal animation starts, the `id` property contains an auto-generated
        ID. */
        originalId: string;
        /** The percentage of the value of this slice against the total value of the pie.
        
        Note that value is already multiplied by 100, so if there are two equal slices, both would have the value of `50`, instead of `0.5`. */
        percent: number;
        pie: PieChartPie;
        removed: boolean;
        /** Swipe distance towards the center of the pie */
        selectDistance: number;
        selected: boolean;
        /** Slice partial swipe distance */
        selection: number;
        url: string;
        urlTarget: string;
        userPlaced: boolean;
        value: number;
        x: number;
        y: number;
    }
    export interface TimeChartHeaderItem {
        date: string;
        unitCount: number;
        unitName: string;
    }
    /** Describes the base properties shared between all events raised by the different charts. */
    export interface TimeChartChartEventArguments extends BaseChartEventArguments {
        /** 
        @deprecated use hoverEnd instead */
        clickEnd: number;
        /** 
        @deprecated use hoverMarker instead */
        clickMarker: boolean;
        /** 
        @deprecated use hoverSeries instead */
        clickSeries: TimeChartSettingsSeries;
        /** 
        @deprecated use hoverStart instead */
        clickStart: number;
        /** The currently used display unit. */
        displayUnit: string;
        /** The UTC timestamp of the end of the hovered time period. `null` if the cursor is not hovering over data. */
        hoverEnd: number;
        hoverItem: TimeChartItem;
        /** `True` if the cursor is directly hovering a marker on a line series. `False` otherwise. Note that this currently does not work with 
        the markers that are configured using `markerStyleFunction` delegate. */
        hoverMarker: boolean;
        /** The series that is currently directly under the cursor. `null` if the cursor is not hovering over data or is hovering over empty area. */
        hoverSeries: TimeChartSettingsSeries;
        /** The UTC timestamp of the beginning of the hovered time period. `null` if the cursor is not hovering over data. */
        hoverStart: number;
        /** The UTC timestamp of the end of the selection. `null` if there is no active selection. */
        selectionEnd: number;
        /** The UTC timestamp of the beginning of the selection. `null` if there is no active selection. */
        selectionStart: number;
        /** The UTC timestamp for the right-most displayed value. */
        timeEnd: number;
        /** The UTC timestamp for the left-most displayed value. */
        timeStart: number;
    }
    export interface TimeChartDataObject extends BaseDataErrorResponse {
        /** 
        @deprecated Use `values` instead. */
        data?: Array<Array<string | number>>;
        /** Specifies the start of the time range for which the data is available. The main purpose of
        this property is to disallow the user to scroll to far back and also to instruct the chart that
        there will never be any data returned before this point. */
        dataLimitFrom?: string | number;
        /** Specifies the end of the time range for which the data is available. See also `dataLimitFrom`.
        This value has to be larger than the largest timestamp in the data. */
        dataLimitTo?: string | number;
        /** The time range the data in this response covers. This usually will match the `from` parameter
        in the request although it can be less than it as well. */
        from: string | number;
        /** Time zone identifier, for example, `UTC` or `America/Los_Angeles`. See 
        [time zone support](time-chart/introductory-topics/time-zone-support.html) for details. 
        
        It is recommended that the data source always return data in UTC.
        
        The default is `UTC`. */
        timeZone?: string;
        /** The time range the data in this response covers. Note that if this value is less than the `to`
        parameter in the request, the chart will automatically issue another request for the time range
        after this. */
        to: string | number;
        /** Specifies the units in which the data in this response is aggregated by. Note that even if the
        chart requests a larger unit (for example, days), the data response might include a smaller unit
        like hours and this property is used by the chart to detect this.
        
        The unit must match one of the units defined in `data.units` settings array. */
        unit: string;
        /** The list of values for the chart. Each array represents values for a single point in time. The first (index 0) value must
        contain the timestamp value, the rest are values for individual series.
        For example: [[time1, series1_Val1, series2_Val1], [time2, series1_Val2, series2_Val2]] */
        values: Array<Array<string | number> | Float64Array | Float32Array | Int32Array | Uint32Array>;
    }
    export interface TimeChartItem {
        header: TimeChartHeaderItem;
        values: Array<LinearChartSeriesStackDataItem>;
    }
    export interface TimeChartSettings extends LinearChartSettings {
        advanced?: TimeChartSettingsAdvanced;
        /** Chart area related settings. */
        area?: TimeChartSettingsArea;
        /** Default series settings for each series rendering type. Use this to configure all series of specific type to get line
        or column chart or combination of them. */
        chartTypes?: {
            /** Series type to show an opening and closing value on top of a total variance. */
            candlestick?: TimeChartSettingsSeriesCandleStick;
            /** Series type to render values as vertical bars. */
            columns?: TimeChartSettingsSeriesColumns;
            /** Series type to connect value points by lines. */
            line?: TimeChartSettingsSeriesLines;
        };
        /** Moving time line that represents the current time, mainly to analyze real-time data changes. To achieve it,
        use server time of page load and adjust time zone offset. */
        currentTime?: TimeChartSettingsCurrentTime;
        /** Settings used to load data into chart. Customise preferred data source feeding methods.
        You can use one of these options: url, data function, preloaded data. */
        data?: Array<TimeChartSettingsData>;
        /** The events used to handle user interaction with UI elements. */
        events?: TimeChartSettingsEvents;
        /** A variety of interaction options that includes scrolling, zooming and swipe. */
        interaction?: TimeChartSettingsInteraction;
        items?: {
            /** Dynamically determine item style from data. */
            styleFunction?: (
                /** item to apply predefined style */
                style: LinearChartSettingsSeriesColumnsStyle, 
                /** data relevant to item */
                rendererData: LinearChartRendererData, 
                /** item position in the value array */
                dataIndex: number, seriesSettings: TimeChartSettingsSeries) => void;
        };
        /** Localizeable strings including export type options and useful default buttons used for chart interaction.
        Buttons like to navigate back, set the chart on full screen and others. */
        localization?: TimeChartSettingsLocalization;
        /** Time line markers that represents event on time. */
        milestones?: Array<TimeChartSettingsMarker>;
        /** Settings to specify initial view once the page loaded.
        
        Note that API methods such as [`setDisplayPeriod`][1] or [`displayUnit`][2] should be used to set these values
        after the chart has been loaded.
        [1]: time-chart/api-reference/api.html#setDisplayPeriod
        [2]: time-chart/api-reference/api.html#displayUnit */
        navigation?: {
            /** Whether to allow the chart view to follow display anchor. Use it for real-time updates. */
            followAnchor?: boolean;
            /** Specifies anchor position for initial time period. Use it together with `initialDisplayPeriod` from which beginning is calculated.
            
            Use [`setDisplayPeriod()`][1] to change the value after the chart has been loaded.
            [1]: time-chart/api-reference/api.html#setDisplayPeriod
            
            Valid values:
            - `now` - set end of the period to current time
            - `newestData` - set end of the period to newest data
            - `oldestData` - set beginning of the period to oldest data
            - time stamp - set period end time in UTC milliseconds */
            initialDisplayAnchor?: number | "newestData" | "now" | "oldestData";
            /** Time period to show initially. Use in combination with intitialDisplayAnchor.
            
            Possible values:
            - `max` - shows all data
            - `timestamp > timestamp` - shows the time range specified by two UTC timestamps, in milliseconds.
            - custom time period like `10 seconds`, `5 m`.
            
            Use [`setDisplayPeriod()`][1] to change the value after the chart has been loaded.
            [1]: time-chart/api-reference/api.html#setDisplayPeriod */
            initialDisplayPeriod?: string;
            /** Data display unit to use for initial view.
            
            Possible values:
            - `auto` - determine automatically based on time range
            - custom time unit like `1 m`, `3 weeks`.
            
            Use [`displayUnit()`][1] to change the value after the chart has been loaded.
            [1]: time-chart/api-reference/api.html#displayUnit */
            initialDisplayUnit?: string;
        };
        /** Array of series in the chart. Each of the series can be different type, can use different data source and
        aggregation. Additionally, series can be clustered and stacked. */
        series?: Array<TimeChartSettingsSeries>;
        /** The default series used as the chart dominant data. Use settings.series array to specify actual series. */
        seriesDefault?: TimeChartSettingsSeries;
        /** Theme to apply. You can either use this to share configuration objects between multiple charts or use one of the predefined
        themes. */
        theme?: TimeChartSettings;
        /** X-axis line representing time at the bottom of chart.
        
        Time line made of two different time graduations. Next image shows time line graduation by days and 3 hours.
        ![time axis](time-chart/images/settings-timeAxis.png)
        
        As you change the zoom level time axis graduation changes accordingly. */
        timeAxis?: TimeChartSettingsTimeAxis;
        /** Adjustable settings to manage default and custom toolbar items, as well as toolbar overall appearance. */
        toolbar?: TimeChartSettingsToolbar;
    }
    export interface TimeChartSettingsAdvanced extends BaseSettingsAdvanced {
        /** When a data update is received, how long to wait for new data updates
        before applying all current updates to the view. Setting to 0
        disables any buffering
        
        Useful to prevent chart flickering from receiving a data update
        immediately after an update is applied. */
        dataUpdateBufferTime?: number;
        /** Determines how frequently (in ms) to poll for new data. If set to null data polling is disabled.
        The data is automatically requested for the period since the last available timestamp until the current time.
        Note that if there is no data available yet for the time period the chart requests, an empty data response should be
        returned, for example `success({ from: 0, to: 1, unit: "ms", values: [] })`. */
        dataUpdateInterval?: number;
        /** Maximum data points to render in one view. Note that TimeChart will not allow to select such time unit that will result in more points being rendered.
        @deprecated */
        maxUnitsToDisplay?: number;
        /** The minimum time interval in which current time marker is updated, in ms. Normally the value is calculated based on the time scale
        so that the time only updates when the time marker would be moved and this value is only used as a baseline. */
        timeUpdateInterval?: number;
    }
    export interface TimeChartSettingsArea extends LinearChartSettingsArea {
        /** List of time periods that are used when formatting time axis.
        
        Note that this does not impact what periods are available to choose from in the toolbar. For that
        use [`toolbar.periods`](time-chart/api-reference/settings/toolbar/periods.html) setting. */
        displayPeriods?: Array<{
                unit?: string;
                isMinorOnly?: boolean;
            }>;
        /** List of time units to use for data aggregation on the time axis.
        
        For example: `{ area: { displayUnits: [ { unit: "5 m", "5 minutes" }, { unit: "15 m", name: "15 minutes" } ] } }` */
        displayUnits?: Array<{
                /** Used units */
                unit?: string;
                /** Name of used units */
                name?: string;
            }>;
        /** Area style settings. */
        style?: TimeChartSettingsAreaStyle;
    }
    export interface TimeChartSettingsAreaDisplayPeriod {
        /** Reference time for passed data. For example, if the `displayPeriod` is set to `1 d`, this could contain the timestamp of the start of that day. */
        displayAnchor?: number | "newestData" | "now" | "oldestData";
        /** Display period, either "auto" or a time unit such as `1 d`. */
        displayPeriod?: string;
        /** Units in which to show data. */
        displayUnit?: string;
        /** Named time interval. */
        name?: string;
    }
    export interface TimeChartSettingsAreaStyle extends LinearChartSettingsAreaStyle {
        /** Default text style for all markers. */
        markerText?: BaseSettingsTextStyle;
        /** Time period selection style. Note that the [`interaction.selection`](time-chart/api-reference/settings/interaction/selection.html) section specifies if the
        selection can be created by the user or only through the API. */
        selection?: TimeChartSettingsAreaStyleSelection;
        /** Time period selection text style. */
        selectionLabel?: BaseSettingsTextStyle;
    }
    export interface TimeChartSettingsAreaStyleSelection {
        /** Specifies if the selection is drawn behind or above the series themselves. */
        behindSeries?: boolean;
        /** If enabled and both selection labels have the same text, it will 
        only display a single label in the middle rather than two duplicate 
        labels. */
        combineSameLabels?: boolean;
        fillColor?: string;
        lineColor?: string;
        lineWidth?: number;
        /** If enabled, the displayed times will be rounded to the nearest unit
        instead of containing the nearest unit. */
        roundToNearestTime?: boolean;
    }
    export interface TimeChartSettingsCurrentTime extends TimeChartSettingsMarker {
        /** Align label relative to the line */
        align?: "center" | "right" | "left";
        /** Style settings for the drawing the time line text on the chart. You can also use `label.text` property
        to specify additional text that will be shown next to the time or by setting `showTime` to `false` (the default)
        display only the specified text. */
        label?: BaseSettingsLabelStyle;
        /** Show the milestone time along with the label text */
        showTime?: boolean;
        /** Align label relative to chart top or bottom side */
        side?: "top" | "bottom";
        /** The style for the vertical time marker line. */
        style?: BaseSettingsLineStyle;
    }
    export interface TimeChartSettingsData extends BaseSettingsData {
        /** Specifies if the cached values from a multiple of a unit may be used
        when retreiving the data for a larger unit. For example, whether data
        for "M" be used for "3 M"
        
        This does nothing when useSmallerUnitCache is true, since that
        setting allows all smaller units to be used regardless of whether
        they are multiples.
        
        When useSmallerUnitCache is false, this specifies whether that
        applies to all base units and multiples of base unitsor just for all
        base units */
        allowUnitCacheMultiples?: boolean;
        /** Maximum number of data entries to store per data unit. */
        cacheSize?: number;
        /** A delegate that will be Load more chart data. */
        dataFunction?: (
            /** UTC timestamp for the start of the time range for which data is required */
            from: number, 
            /** UTC timestamp for the end of the time range for which data is required */
            to: number, 
            /** The unit by which the data has to be aggregated. The data source can also return smaller units. */
            unit: string, 
            /** Callback function to execute when data arrived correctly. */
            success: (data: TimeChartDataObject) => void, 
            /** Callback function to execute when error occure while loading data. */
            fail: (result: BaseDataErrorResponse) => void, 
            /** The current display timezone for the chart. Only specified if the unit is days or larger, `null` otherwise. */
            timeZone: string) => void;
        /** Whether to request only when scrolling/scaling has stopped. */
        minimizeRequests?: boolean;
        /** How much data to load in advance. For example, if `prefetchRatio=1`, the chart will automatically load data
        so that the user can scroll a whole width of the chart to both sides without waiting for the data. */
        prefetchRatio?: number;
        /** This property allows the data to be specified inline with the settings. Note that even if this is specified
        the chart might want to invoke `url` or `dataFunction` if the user selects a time range outside of what has
        been preloaded. */
        preloaded?: TimeChartDataObject;
        /** Maximum number of data points to request in one go. Multiple requests will be issued if more data is needed.
        
        Note that the server can opt to return less data in the response as well - more requests will be issued in this
        case as well. */
        requestMaxUnits?: number;
        /** The format string (or strings) that is used to parse timestamps that are given as strings. Note that
        for optimal performance a single format string should be used (or even better, the numeric timestamps
        should be used instead).
        
        When `stringTimestampFormat` is not specified the parser supports ISO 8601 formats (for details see 
        [moment documentation](http://momentjs.com/docs/#/parsing/string/)).
        
        See [moment documentation](http://momentjs.com/docs/#/parsing/string-format/) for details on the format 
        strings. */
        stringTimestampFormat?: string | Array<string>;
        /** If set to `true`, the validation of the loaded data is not performed and warnings will not be displayed.
        Note that errors are not suppressed.
        
        This setting should only be used when it is determined that the potential issues described by these warnings
        does not prevent the chart from working correctly. It should also be noted that a future version of the library
        might change the behavior of the situations the warnings are intended to prevent. */
        suppressWarnings?: boolean;
        /** Data time zone offset in minutes.
        @deprecated */
        timeZoneOffset?: string | number;
        /** Specifies whether the numeric timestamps used with this data source are in seconds instead of milliseconds.
        
        This applies to the `from` and `to` request parameters and all timestamps within the data response. */
        timestampInSeconds?: boolean;
        /** Time steps at what data can be fetched. */
        units?: Array<string>;
        /** URL that is used to load data. Additional query string parameters are added to the given url:
        `from`, `to`, `unit` and `timeZone`. See the documentation of `dataFunction` for the description of these
        parameters. */
        url?: string;
        /** Allows specifying specific URL for each time unit. This can be useful if the data is pregenerated in 
        static files, for example, to specify different data file where time aggregated by months or years - 
        `urlByUnit: { 'y': '/data/yearData.json', 'm': '/data/monthData.json' }`. 
        If this is specified, it overrides `url` property. */
        urlByUnit?: Dictionary<string>;
        /** Specifies if the cached values from a smaller unit may be used when retrieving the data for a larger unit.
        
        This should be set to `false` when the data source uses a custom aggregation specific to each individual unit.
        
        Note that currently the smaller units are only used when they overlap the required range completely. For partial
        overlap the values are only used as a placeholder while the larger unit is requested from the data source. */
        useSmallerUnitCache?: boolean;
    }
    export interface TimeChartSettingsEvents extends LinearChartSettingsEvents<TimeChartChartEventArguments, TimeChartChartEventArguments> {
        /** 
        @deprecated same as onChartUpdate */
        onTimeChange?: (
            /** An empty mouse event. */
            event: BaseMouseEvent, args: TimeChartChartEventArguments) => void;
        /** Specifies if the `onSelectionChange` event should be raised while the user drags the selection or only
        once the pointer is released and the selection is finalized. */
        selectionChangeDuringInteraction?: boolean;
    }
    export interface TimeChartSettingsInteraction extends LinearChartSettingsInteraction {
        /** Scrolling settings. */
        scrolling?: TimeChartSettingsInteractionScrolling;
        /** Configurable settings to select specific time period by dragging on the time axis. */
        selection?: TimeChartSettingsInteractionSelection;
        /** Snap mode determines how the chart locks on to data periods after dragging, scrolling and other actions. */
        snapMode?: "displayUnit" | "period" | "multiPeriod";
        /** Configurable settings to enhance and alleviate zoom interaction. */
        zooming?: TimeChartSettingsInteractionZooming;
    }
    export interface TimeChartSettingsInteractionScrolling extends LinearChartSettingsInteractionScrolling {
        /** Limits scrolling in the left side. This should be either the timestamp value in milliseconds or the string constants 'oldestData' or 'oldestDataRounded'.
        
        'oldestDataRounded' means that the scrolling limit will be the oldest data point rounded down for the currently visible major time unit (the bottom line
        in the time axis). For example, if the data starts on June, when viewing the whole year, the first half of the year will be shown empty.
        
        Specify `null` to disable the limit. */
        limitFrom?: number | "oldestData" | "oldestDataRounded";
        /** Defines the chart behavior when the chart is scrolled passed the data limits. The actual limits are stored in `limitFrom` and `limitTo`. */
        limitMode?: "snapBack" | "block";
        /** Limits scrolling in the right side. This should be either the timestamp value in milliseconds or the string constants 'newestData', 'newestDataRounded'
        or 'now'.
        
        'newestDataRounded' means that the scrolling limit will be the newest data point rounded up for the currently visible major time unit (the bottom line
        in the time axis). For example, if the data ends on June, when viewing the whole year, the second half of the year will be shown empty.
        
        Specify `null` to disable the limit. */
        limitTo?: number | "newestData" | "now" | "newestDataRounded";
        /** Allows the user to scroll past the limit to a certain degree. This coefficient is multiplied to the overscroll area - so if `overscrollProportion`
        is set to 0.1 and the user scrolls 10 units past the limit, the chart will scroll back 9 units. */
        overscrollProportion?: number;
    }
    export interface TimeChartSettingsInteractionSelection {
        /** Specifies if the selection area should be cleared/removed when
        display unit dropdown menu is changed to a unit where the selection
        will no longer start and end on a whole unit */
        clearOnDropdownUnitMismatch?: boolean;
        /** Specifies if the selection area should be cleared/removed on right click. By default right click will clear selection. */
        clearOnRightClick?: boolean;
        /** Enable/disable selection */
        enabled?: boolean;
        /** Specifies if the selection area can be moved by dragging it. By default the whole chart is moved instead. */
        moveByDragging?: boolean;
        /** Specifies the speed by which the selection is resized by dragging it up and down. Requires `moveByDragging` to be enabled.
        
        Note - set to `0` to disable the resize gesture. */
        resizeSensitivity?: number;
        /** Specifies how much the pointer must move vertically for the resize to start. Requires `moveByDragging` to be enabled. */
        resizeTolerance?: number;
        /** Distance in pixels to both sides of the selection left/right edges that can be used to drag the selection area to expand/collapse it. */
        tolerance?: number;
        /** Specifies what should happen to the selection when zoom out is used */
        zoomOutSelectionMode?: "clear" | "mismatch" | "keep";
    }
    export interface TimeChartSettingsInteractionZooming extends LinearChartSettingsInteractionZooming {
        /** If true, clicking to zoom will always pick the next smallest display
        unit */
        alwaysNextUnit?: boolean;
        /** Whether to zoom-in when the chart area is clicked/tapped.
        
        Note that to maintain backwards compatibility, if the zooming is completely disabled by setting `enabled: false`,
        the click interaction will still be available and must be disabled separately. */
        click?: boolean;
        /** If set to `false`, all zoom gestures will be disabled, irrespective of how the other properties are configured.
        Note that the user will still be able to zoom by drill-down (clicking on values; to disable that, specify `click: false`)
        and by using toolbar. */
        enabled?: boolean;
        /** If true, zooming out will try to align with the next larger display
        unit. */
        matchDisplayUnit?: boolean;
        /** If set to `false`, no zooming will occur on interaction if the chart
        is already at the minimum unit */
        zoomOnMinUnit?: boolean;
    }
    export interface TimeChartSettingsLocalization extends LinearChartSettingsLocalization {
        /** Calendar specific localization settings. This section is used to initialize moment.js locale.
        See moment.js documentation for detailed description: http://momentjs.com/docs/#/customization/. */
        calendar?: TimeChartSettingsLocalizationCalendar;
        /** Message being displayed while loading initial data. */
        determiningDataBounds?: string;
        /** Which day of the week is considered the start of the week for
        display purposes. 'null' uses locale default, 0 uses Sunday, 1 uses
        Monday */
        firstDayOfWeek?: number;
        /** Weekdays that are considered holidays. Uses ISO numbering, with 1 being Monday and 7 being Sunday. */
        holidayWeekdays?: Array<number>;
        /** Date and time formats used to display the selected time range in the header of the info popup. */
        infoDates?: {
            /** The formats used when only a single time unit has been selected or when the selection spans
            multiple major units (for example, selecting days from multiple months). */
            fullTimeFormats?: TimeChartSettingsLocalizationTimeUnits;
            /** The formats used for the major unit when displaying a time range where the major unit is the same,
            for example, the selection contains multiple days from the same week.
            
            If the display unit is days, the resulting header text is shown as
            `minorTimeFormats.d(from) - minorTimeFormats.d(to) majorTimeFormats.d(from)`, e.g.
            `Feb 24 - Feb 26 2016`. */
            majorTimeFormats?: TimeChartSettingsLocalizationTimeUnits;
            /** See the description of `majorTimeFormats`. */
            minorTimeFormats?: TimeChartSettingsLocalizationTimeUnits;
        };
        /** Message to show when data loading is in progress. */
        loadingLabel?: string;
        /** Localizable strings for markers. */
        markerDates?: {
            /** Time formatting strings for time marker date. */
            timeFormats?: TimeChartSettingsLocalizationTimeUnits;
        };
        /** Localizable strings displayed in time axis. */
        timeAxisDates?: {
            /** Time formatting strings for major time units in bottom line of time axis. */
            majorLabelFullTimeFormats?: TimeChartSettingsLocalizationTimeUnits;
            /** Time formatting strings for major time units in bottom line of time axis. */
            majorLabelTimeFormats?: TimeChartSettingsLocalizationTimeUnits;
            /** Time formatting strings for minor time units in top line of time axis. */
            minorLabelTimeFormats?: TimeChartSettingsLocalizationTimeUnits;
        };
        /** Named time units. */
        timeUnitsNames?: TimeChartSettingsLocalizationTimeUnits;
        /** Plural forms of time units. */
        timeUnitsNamesPlural?: TimeChartSettingsLocalizationTimeUnits;
        /** Strings used in toolbars. */
        toolbar?: TimeChartSettingsLocalizationToolbar;
    }
    export interface TimeChartSettingsLocalizationCalendar {
        /** 
        @deprecated specify `parentLocale` instead and use the localization file provided by moment.js */
        months?: Array<string>;
        /** 
        @deprecated specify `parentLocale` instead and use the localization file provided by moment.js */
        monthsShort?: Array<string>;
        /** Specify the moment.js locale that should be used in the chart. While it is possible to set
        `months`, `weekdays` etc. in the TimeChart settings, the `parentLocale` should be used instead as
        the TimeChart settings do not expose all available options and it recommended to use the locales
        that are [provided by moment.js](https://github.com/moment/moment/tree/develop/locale).
        
        Note that using this setting requires `moment.js` 2.12.0 or newer and the locale file must be included
        in the page - the chart will not download it automatically. */
        parentLocale?: string;
        /** 
        @deprecated specify `parentLocale` instead and use the localization file provided by moment.js */
        week?: {
            /** Specifies the first day of the week. The default is `1` - Monday. Use either `0` or `7` for Sunday.
            @deprecated specify `parentLocale` instead and use the localization file provided by moment.js */
            dow?: number;
            /** Specifies how the first week of the year is calculated. The default is `4` - the week that contains Jan 4th is counted as the first.
            
            Note that this setting is not used by default because the default formatting specifies ISO week numbering. If you want to change that,
            use `w` and `gggg` when specifying the week format strings.
            @deprecated specify `parentLocale` instead and use the localization file provided by moment.js */
            doy?: number;
        };
        /** 
        @deprecated specify `parentLocale` instead and use the localization file provided by moment.js */
        weekdays?: Array<string>;
        /** 
        @deprecated specify `parentLocale` instead and use the localization file provided by moment.js */
        weekdaysMin?: Array<string>;
        /** 
        @deprecated specify `parentLocale` instead and use the localization file provided by moment.js */
        weekdaysShort?: Array<string>;
    }
    export interface TimeChartSettingsLocalizationTimeUnits {
        /** Months */
        M?: string;
        d?: string;
        h?: string;
        /** Minutes */
        m?: string;
        /** Milliseconds */
        ms?: string;
        /** Quarters */
        q?: string;
        s?: string;
        w?: string;
        y?: string;
    }
    export interface TimeChartSettingsLocalizationToolbar extends LinearChartSettingsLocalizationToolbar {
        /** Text to show in display periods drop-down when current period does not match any of the presets. */
        customPeriod?: string;
        /** Display period dropdown title. */
        periodDropdownTitle?: string;
        /** Text to show if there are unavailable units in the unit dropdown. This can only happen for small units if the chart is zoomed out too much. */
        unavailableUnitTitle?: string;
        /** Display unit dropdown title. */
        unitDropdownTitle?: string;
        /** Zoom out button text. */
        zoomoutButton?: string;
        /** Zoom out button title. */
        zoomoutTitle?: string;
    }
    export interface TimeChartSettingsMarker {
        /** Align label relative to the line */
        align?: "center" | "right" | "left";
        /** Show/hide the marker. */
        enabled?: boolean;
        /** Style settings for the drawing the time line text on the chart. You can also use `label.text` property
        to specify additional text that will be shown next to the time or by setting `showTime` to `false` (the default)
        display only the specified text. */
        label?: BaseSettingsLabelStyle;
        /** Specifies if the time marker is always included when limiting scrolling. If this is `true`, then the user will always
        be able to scroll to the current time even if the data is not available. */
        overrideLimits?: boolean;
        /** Show the milestone time along with the label text */
        showTime?: boolean;
        /** Align label relative to chart top or bottom side */
        side?: "top" | "bottom";
        /** The style for the vertical time marker line. */
        style?: BaseSettingsLineStyle;
        /** Timestamp in UTC milliseconds to locate time marker on chart. If this is specified, the 
        marker does not automatically move. */
        time?: number;
    }
    export interface TimeChartSettingsSeries extends LinearChartSettingsSeries {
        /** Data manipulation settings used for default series. */
        data?: TimeChartSettingsSeriesData;
    }
    export interface TimeChartSettingsSeriesCandleStick extends LinearChartSettingsSeriesCandleStick {
        /** Data manipulation settings used for default series. */
        data?: TimeChartSettingsSeriesCandleStickData;
    }
    export interface TimeChartSettingsSeriesCandleStickData extends TimeChartSettingsSeriesData {
        /** The index in the value arrays where the closing values in that particular time period is located. */
        close?: number;
        /** The index in the value arrays where the highest values in that particular time period is located. */
        high?: number;
        /** The index in the value arrays where the lowest values in that particular time period is located. */
        low?: number;
        /** The index in the value arrays where the opening values in that particular time period is located. */
        open?: number;
    }
    export interface TimeChartSettingsSeriesColumns extends LinearChartSettingsSeriesColumns {
        /** Data manipulation settings used for default series. */
        data?: TimeChartSettingsSeriesData;
    }
    export interface TimeChartSettingsSeriesData extends LinearChartSettingsSeriesData {
        /** Index in the value array where the count of aggregated values are located. This is optional but should be provided if the aggregation
        method is `avg` (average) and URL or `dataFunction` is used to aggregate the values external to the chart because otherwise the chart will
        aggregate values by simply counting them. So if `countIndex` is not provided and there are values:
        `[[May 1 2014, 5], [May 2 2014, 15], [June 1 2014, 20]]` the aggregation to year 2014 will yield `(5+15+20)/3 = 13.3` when the display unit is
        days but `((5+15)/2 + 20)/2 = 15` when the display unit is months. */
        countIndex?: number;
        /** Index in value the array where the values that will be aggregated are located. An alternative is to use `valueFunction`. */
        index?: number;
    }
    export interface TimeChartSettingsSeriesLines extends LinearChartSettingsSeriesLines {
        /** Data manipulation settings used for default series. */
        data?: TimeChartSettingsSeriesData;
        /** Default style for line type series. */
        style?: TimeChartSettingsSeriesLinesStyle;
    }
    export interface TimeChartSettingsSeriesLinesStyle extends LinearChartSettingsSeriesLinesStyle {
        /** Enables customizing the marker for each particular data point. The function receives an array of all horizontal indices that are being painted and
        an array of vertical positions for each marker. Both arrays have the same length.
        
        The output has to be an array of the same length where each entry represents a marker that will be drawn for that value. If the array contains a `null` value
        that specific marker is not drawn.
        
        Note that this method is not used when the marker is drawn for the legend entry.
        
        This method will be invoked on each frame so it is important that it is optimized for performance. */
        markerStyleFunction?: (
            /** The UTC timestamps of each unit that can display a marker. */
            timestamps: Array<number>, verticalPositions: Array<number>) => Array<LinearChartSettingsSeriesStyleMarker>;
    }
    export interface TimeChartSettingsTimeAxis {
        /** Whether to allow minor units that are the same size as major units.
        Can be used to effectively disallow some major unit groupings, such
        as major labels for decade or century groups. */
        allowEqualMinorUnits?: boolean;
        /** Shows/hides time axis. */
        enabled?: boolean;
        /** Whether to change display units while animating */
        keepUnitWhileAnimating?: boolean;
        /** Maximum width of a single time axis display unit relative to the
        screen width. If maxUnitWidth is larger than this factor would allow,
        then this takes precedence. */
        maxRelativeUnitWidth?: number;
        /** Maximum width of a single time axis display unit, in px. If the width is bigger than this, the chart will use a smaller time unit
        (e.g. switch from minutes to seconds).
        
        Note that this value applies to the whole cluster and not a single series. That is, if you have two columns for each timestamp side by side, both of them
        have to fit within this limit. */
        maxUnitWidth?: number;
        /** Minimum width of a single time axis display unit, in px. If the width is smaller than this, the cgart will switch to bigger time units
        (e.g. from minutes to hours).
        
        Note that this value applies to the whole cluster and not a single series. That is, if you have two columns for each timestamp side by side, each of them
        will only have half of this limit available in the worst case. */
        minUnitWidth?: number;
        /** Whether to show smallest bars on time axis. It matches with display unit dropdown entry used in time chart toolbar. */
        miniTimeRuler?: boolean;
        /** Relative amount of padding to add around the text. Remains
        proportional to text size. 0 results in no padding.
        
        Default results in 44px total padding with text defaults */
        padding?: number;
        /** Whether to highlight weekends in day view. The highlight only appears if the display unit is hours, days or weeks. */
        showHolidays?: boolean;
        /** Time axis style */
        style?: {
            /** If true, will attempt to wrap minor labels in if they don't fit
            before omitting them outright. Note that minor labels will still
            not be drawn if they overlap after wrapping, even if the overlap
            is with the major label. This mostly applies to in case of
            ranged minor time units. */
            allowMinorLabelWrapping?: boolean;
            /** Style used to highlight weekends.
            
            Note that this is drawn on top of the series so semi-transparent fill styles should be used. */
            dateHolidays?: BaseSettingsBackgroundStyle;
            /** Tint for lighter blocks of altering shades for time axis. Every second major unit will have this overlay painted on them. */
            dateLighten?: {
                fillColor?: string;
            };
            /** Style for major time labels balloons. */
            majorTimeBalloonStyle?: BaseSettingsBackgroundStyle;
            /** Style for major time labels. */
            majorTimeLabel?: BaseSettingsTextStyle;
            /** How to align the minor unit */
            minorAlign?: "center" | "right" | "left";
            /** What the minor unit is aligned with respect to. For example,
            suppose the time ruler has 1 tick for every month, but the minor
            unit only has a label for every 3 months. In "tick" mode, the
            alignment will be based on the 1 month space of a single tick,
            whereas in "nextLabel" mode the alignment will be based on the
            full 3 month space between labeled minor units. */
            minorAlignMode?: "tick" | "nextLabel";
            /** Style for minor time labels balloons. */
            minorTimeBalloonStyle?: BaseSettingsBackgroundStyle;
            /** Style for minor time labels. */
            minorTimeLabel?: BaseSettingsTextStyle;
            /** Minor time ruler style. */
            minorTimeRuler?: BaseSettingsLineStyle;
            /** Which time units will display in a range on the minor axis. For
            example, if "3 M" is in the array, then it will cause any
            instance of 3 months to display as a range like "Jan-Mar" on the
            minor time axis. */
            rangedMinorTimeUnits?: Array<string>;
            /** Whether to show balloons around major time labels. */
            showMajorTimeBalloons?: boolean;
            /** Whether to display minor time labels as balloons instead of ruler style. */
            showMinorTimeBalloons?: boolean;
            /** Chart vertical grid settings */
            vgrid?: BaseSettingsLineStyle;
        };
        /** Time zone identifier, for example, `UTC` or `America/Los_Angeles`. See 
        [time zone support](time-chart/introductory-topics/time-zone-support.html) for details. */
        timeZone?: string;
        /** Time axis time zone offset in minutes.
        @deprecated */
        timeZoneOffset?: string | number;
        /** Specifies when the chart switches the display unit during up/down scroll and other situations when the most appropriate display unit has to be selected. */
        unitSizePolicy?: "auto" | "min" | "max";
        /** Whether to show vertical grid. */
        vgrid?: boolean;
        /** Which unit determins the vertical grid placement */
        vgridMode?: "both" | "major" | "minor";
    }
    export interface TimeChartSettingsToolbar extends BaseSettingsToolbar {
        /** Whether to show display period dropdown. */
        displayPeriod?: boolean;
        /** Whether to show the display unit dropdown. */
        displayUnit?: boolean;
        /** Show/hide toolbar. */
        enabled?: boolean;
        /** Whether the 'All Data' display period should be selected as long as
        *at least* all data is shown */
        flexibleAllData?: boolean;
        /** Whether the 'All Data' display period should avoid changing the
        current display unit */
        flexibleAllDataUnit?: boolean;
        /** A list of toolbar items. If this is specified, it overrides all the default buttons.
        
        Use `extraItems` to specify items that should be displayed in addition to the defaults. */
        items?: Array<string | BaseSettingsToolbarItem>;
        /** Whether to show the Lin/Log button in the toolbar. */
        logScale?: boolean;
        /** Time periods */
        periods?: Array<TimeChartSettingsAreaDisplayPeriod>;
        /** Whether to show the Zoom-out button in the toolbar. */
        zoomOut?: boolean;
        /** Create custom zoomout function to specify target unit for each display unit once `Zoom-out` toolbar item clicked. Also possible to specify
        new from and to timestamps to manage zoomout range in perspective to current range. If only unit specified, internal logic
        will be applied that is 30 times wider time range than compared to range before `Zoom-out` toolbar item clicked. If only from and to timestamps
        specified than unit will be used as a next unit to current display item that's available of display units. If according to min, max unit width
        is not possible to show specified range, the middle of both timestamps will be the center of zoomout range and some portion of both sides may be
        cut down. */
        zoomOutFunction?: (
            /** Current display unit. */
            unit: "ms" | "s" | "m" | "h" | "d" | "w" | "M" | "y", 
            /** The count of specified units. */
            count: number, 
            /** Timestamp of time range before `Zoom-out`. */
            from: number, 
            /** Timestamp of time range before `Zoom-out`. */
            to: number) => {
                unit: "ms" | "s" | "m" | "h" | "d" | "w" | "M" | "y" | "milliseconds" | "millisecond" | "sec" | "second" | "seconds" | "min" | "minute" | "minutes" | "hour" | "hours" | "day" | "days" | "D" | "week" | "weeks" | "W" | "mon" | "month" | "months" | "year" | "years" | "Y";
                count: number;
                from: number;
                to: number;
            };
    }
    /* tslint:enable */
}

declare module ZoomCharts {
    /* tslint:disable */

    export class FacetChart extends Configuration.BaseApi {
        public constructor(settings: Configuration.FacetChartSettings);
        /** Adds the given data to whatever data the chart has currently loaded. The chart will automatically be updated
        to display this new data if it falls within the currently visible bounds. */
        public addData(data: Configuration.FacetChartDataObjectRoot, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        public expandSlice(slice: Configuration.FacetChartItem, origin?: string): boolean;
        public getActiveFacet(): Configuration.FacetChartFacet;
        public getActiveFacets(): Array<Configuration.FacetChartFacet>;
        public getActiveItems(): Array<Configuration.FacetChartItem>;
        /** Gets the currently enabled series */
        public getEnabledSeries(): Array<Configuration.FacetChartSettingsSeries>;
        public getItemAt(x: number, y: number): Configuration.FacetChartItem;
        public getPie(): Array<string>;
        public getPieOffset(): number;
        /** Gets all series even those that are not enabled */
        public getSeries(): Array<Configuration.TimeChartSettingsSeries>;
        /** Adds event listener. */
        public on(
            /** The type of the event for which the listener will be added. See method overloads for valid values. */
            name: string, 
            /** The callback function. It receives two arguments - the mouse event data and a separate object containing chart specific information. */
            listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartEventArguments) => void): void;
        /** Adds an event listener for when the scroll animation completes. */
        public on(name: "animationDone", listener: (event: Configuration.BaseMouseEvent, args: Configuration.FacetChartChartEventArguments) => void): void;
        public on(name: "chartUpdate", listener: (event: Configuration.BaseMouseEvent, args: Configuration.FacetChartChartEventArguments) => void): void;
        public on(name: "click", listener: (event: Configuration.BaseMouseEvent, args: Configuration.FacetChartChartClickEventArguments) => void): void;
        public on(name: "doubleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.FacetChartChartClickEventArguments) => void): void;
        public on(name: "error", listener: (
                /** An empty mouse event. */
                event: Configuration.BaseMouseEvent, args: Configuration.BaseChartErrorEventArguments) => void): void;
        public on(name: "hoverChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.FacetChartChartEventArguments) => void): void;
        public on(name: "positionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.FacetChartChartEventArguments) => void): void;
        public on(name: "rightClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.FacetChartChartClickEventArguments) => void): void;
        public on(name: "selectionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.FacetChartChartEventArguments) => void): void;
        public on(name: "settingsChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartSettingsChangeEventArguments) => void): void;
        public on(name: "tripleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.FacetChartChartClickEventArguments) => void): void;
        /** Replaces the data already in the data cache with the given values. */
        public replaceData(data: Configuration.FacetChartDataObjectRoot, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        /** Replaces the existing series configuration with new one instead of merging it like `updateSettings`.
        @deprecated Use `replaceSettings({series: seriesData})` instead. */
        public replaceSeries(series: Array<Configuration.FacetChartSettingsSeries>): this;
        /** Updates the chart settings but instead of merging some settings that are arrays or dictionaries (such as `data`)
        these collections are replaced completely. For example, this allows removal of series or value axis within TimeChart. */
        public replaceSettings(changes: Configuration.FacetChartSettings): this;
        public selection(selected?: Array<string | Configuration.FacetChartItem>): Array<Configuration.FacetChartItem>;
        public setPie(pieId: string | Array<string>, offset?: number, count?: number): this;
        /** Lists the predefined themes for the chart. These can be used within the settings objects or via the `customize()` method:
        
        ```javascript 
        var chart = new ZoomCharts.$this({ theme: ZoomCharts.$this.themes.dark });
        chart.updateSettings({ theme: ZoomCharts.$this.themes.dark });
        chart.customize("dark");
        ``` */
        public static themes: {
            dark?: Configuration.FacetChartSettings;
            horizontal?: Configuration.FacetChartSettings;
        };
        public updateFilter(): this;
        /** Updates the chart settings. Only the settings that have to be changed should be passed. Note that some arrays
        and dictionaries (such as `data`) are merged by the ID values - if instead they should be replaced, use
        [`replaceSettings()`](#doc_replaceSettings) method. */
        public updateSettings(changes: Configuration.FacetChartSettings): this;
        /** Increases the visible range on the chart.
        
        Has no effect if the chart data has not been yet loaded. */
        public zoomOut(
            /** determines if the zoom animation is executed. */
            animate?: boolean, 
            /** For advanced use cases, can specify whether the
            zoomOut should be considered to come from the "api" (default) or the
            "user" */
            origin?: string): void;
    }
    export class GeoChart extends Configuration.BaseApi {
        public constructor(settings: Configuration.GeoChartSettings);
        /** Adds the given data to whatever data the chart has currently loaded. The chart will automatically be updated
        to display this new data if it falls within the currently visible bounds. */
        public addData(data: Configuration.GeoChartDataObject, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        public back(): this;
        public bounds(bounds?: IGeoRectangle): IGeoRectangle;
        public getNode(id: string): Configuration.ItemsChartNode;
        public getNodeDimensions(node: string | Configuration.ItemsChartNode): {
                x: number;
                y: number;
                radius: number;
                hwidth: number;
            };
        public hideMenu(): this;
        /** Returns the Leaflet.Map object to enable any advanced customizations.
        
        Please note that this method might return `null` if `leaflet.js` has not been loaded yet. 
        If `leaflet.js` is not loaded synchronously in the page, it will be loaded on demand by GeoChart. 
        In this case the map object will not be available until the load is finished.
        
        To handle this scenario, subscribe to `onChartUpdate` event and verify if this method returns non-null value. */
        public leaflet(): any;
        /** Adds event listener. */
        public on(
            /** The type of the event for which the listener will be added. See method overloads for valid values. */
            name: string, 
            /** The callback function. It receives two arguments - the mouse event data and a separate object containing chart specific information. */
            listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartEventArguments) => void): void;
        public on(name: "chartUpdate", listener: (event: Configuration.BaseMouseEvent, args: Configuration.ItemsChartChartEventArguments) => void): void;
        public on(name: "click", listener: (event: Configuration.BaseMouseEvent, args: Configuration.ItemsChartChartClickEventArguments) => void): void;
        public on(name: "doubleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.ItemsChartChartClickEventArguments) => void): void;
        public on(name: "error", listener: (
                /** An empty mouse event. */
                event: Configuration.BaseMouseEvent, args: Configuration.BaseChartErrorEventArguments) => void): void;
        public on(name: "hoverChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.ItemsChartChartEventArguments) => void): void;
        public on(name: "lassoChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartLassoUpdatedEventArguments) => void): void;
        public on(name: "positionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.ItemsChartChartEventArguments) => void): void;
        public on(name: "rightClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.ItemsChartChartClickEventArguments) => void): void;
        public on(name: "selectionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.ItemsChartChartEventArguments) => void): void;
        public on(name: "settingsChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartSettingsChangeEventArguments) => void): void;
        public on(name: "tripleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.ItemsChartChartClickEventArguments) => void): void;
        /** Replaces the data already in the data cache with the given values. */
        public replaceData(data: Configuration.GeoChartDataObject, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        /** Updates the chart settings but instead of merging some settings that are arrays or dictionaries (such as `data`)
        these collections are replaced completely. For example, this allows removal of series or value axis within TimeChart. */
        public replaceSettings(changes: Configuration.GeoChartSettings): this;
        /** Set/Get selected objects. */
        public selection(
            /** array of objects identifiers to select. Do not pass this parameter if you don't want to change current selection. */
            selected?: Array<string | Configuration.ItemsChartNode | Configuration.ItemsChartLink>): Array<Configuration.ItemsChartNode | Configuration.ItemsChartLink>;
        /** Lists the predefined themes for the chart. These can be used within the settings objects or via the `customize()` method:
        
        ```javascript 
        var chart = new ZoomCharts.$this({ theme: ZoomCharts.$this.themes.dark });
        chart.updateSettings({ theme: ZoomCharts.$this.themes.dark });
        chart.customize("dark");
        ``` */
        public static themes: {
            flat?: Configuration.GeoChartSettings;
        };
        /** Updates the chart settings. Only the settings that have to be changed should be passed. Note that some arrays
        and dictionaries (such as `data`) are merged by the ID values - if instead they should be replaced, use
        [`replaceSettings()`](#doc_replaceSettings) method. */
        public updateSettings(changes: Configuration.GeoChartSettings): this;
        /** Updates (recalculates) the style for the whole chart or specific objects matching the given IDs. */
        public updateStyle(
            /** A list of IDs for the objects which need their style recalculated */
            objects?: Array<string>): void;
        public zoomLevel(newZoom?: number): number;
    }
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
    export class PieChart extends Configuration.BaseApi {
        public constructor(settings: Configuration.PieChartSettings);
        /** Adds the given data to whatever data the chart has currently loaded. The chart will automatically be updated
        to display this new data if it falls within the currently visible bounds. */
        public addData(data: Configuration.PieChartDataObjectRoot, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        public expandSlice(slice: Configuration.PieChartSlice): boolean;
        public getActivePie(): Configuration.PieChartPie;
        public getActivePies(): Array<Configuration.PieChartPie>;
        public getActiveSlices(): Array<Configuration.PieChartSlice>;
        public getPie(): Array<string>;
        public getPieOffset(): number;
        public getSliceDimensions(sliceId: Array<string>, showPartial?: boolean): {
                centerX: number;
                centerY: number;
                r0: number;
                r1: number;
                a0: number;
                a1: number;
            };
        /** Adds event listener. */
        public on(
            /** The type of the event for which the listener will be added. See method overloads for valid values. */
            name: string, 
            /** The callback function. It receives two arguments - the mouse event data and a separate object containing chart specific information. */
            listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartEventArguments) => void): void;
        public on(name: "chartUpdate", listener: (event: Configuration.BaseMouseEvent, args: Configuration.PieChartChartEventArguments) => void): void;
        public on(name: "click", listener: (event: Configuration.BaseMouseEvent, args: Configuration.PieChartChartClickEventArguments) => void): void;
        public on(name: "doubleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.PieChartChartClickEventArguments) => void): void;
        public on(name: "error", listener: (
                /** An empty mouse event. */
                event: Configuration.BaseMouseEvent, args: Configuration.BaseChartErrorEventArguments) => void): void;
        public on(name: "hoverChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.PieChartChartEventArguments) => void): void;
        public on(name: "positionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.PieChartChartEventArguments) => void): void;
        public on(name: "rightClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.PieChartChartClickEventArguments) => void): void;
        public on(name: "selectionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.PieChartChartEventArguments) => void): void;
        public on(name: "settingsChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartSettingsChangeEventArguments) => void): void;
        public on(name: "tripleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.PieChartChartClickEventArguments) => void): void;
        /** Replaces the data already in the data cache with the given values. */
        public replaceData(data: Configuration.PieChartDataObjectRoot, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        /** Updates the chart settings but instead of merging some settings that are arrays or dictionaries (such as `data`)
        these collections are replaced completely. For example, this allows removal of series or value axis within TimeChart. */
        public replaceSettings(changes: Configuration.PieChartSettings): this;
        /** Retrieves or updates the selected slices on the chart. */
        public selection(
            /** The slices or their IDs that should be selected. Any currently selected slices that are not present will be unselected. */
            selected?: Array<string | Configuration.PieChartSlice>): Array<Configuration.PieChartSlice>;
        public setPie(pieId: Array<string>, offset?: number): this;
        public setPieOffset(offset: number): this;
        public showInfoPopup(x: number, y: number, slice: Configuration.PieChartSlice): void;
        /** Lists the predefined themes for the chart. These can be used within the settings objects or via the `customize()` method:
        
        ```javascript 
        var chart = new ZoomCharts.$this({ theme: ZoomCharts.$this.themes.dark });
        chart.updateSettings({ theme: ZoomCharts.$this.themes.dark });
        chart.customize("dark");
        ``` */
        public static themes: {
            bevel?: Configuration.PieChartSettings;
            dark?: Configuration.PieChartSettings;
            flat?: Configuration.PieChartSettings;
            gradient?: Configuration.PieChartSettings;
            raised?: Configuration.PieChartSettings;
            rounded?: Configuration.PieChartSettings;
        };
        public updateFilter(): PieChart;
        /** Updates the chart settings. Only the settings that have to be changed should be passed. Note that some arrays
        and dictionaries (such as `data`) are merged by the ID values - if instead they should be replaced, use
        [`replaceSettings()`](#doc_replaceSettings) method. */
        public updateSettings(changes: Configuration.PieChartSettings): this;
    }
    export class TimeChart extends Configuration.BaseApi {
        public constructor(settings: Configuration.TimeChartSettings);
        /** Adds the given data to whatever data the chart has currently loaded. The chart will automatically be updated
        to display this new data if it falls within the currently visible bounds. */
        public addData(data: Configuration.TimeChartDataObject, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        /** Gets or sets the current display unit. Note that setting the display unit might also result in changes
        of the current time range to ensure that the unit follows the min/max widths.
        
        If `unit: "auto"` is used to select the best-fit display unit, the chart determines the correct display unit
        based on [`timeAxis.unitSizePolicy`](time-chart/api-reference/settings/timeAxis/unitSizePolicy.html) setting.
        
        Note that this method can be used to set a display unit that the chart is not configured to use but in this
        case a warning will be displayed in the browser console because user interactions will not preserve this setting.
        To avoid this, specify the needed display units in [`area.displayUnits`](time-chart/api-reference/settings/area/displayUnits.html). */
        public displayUnit(
            /** If specified, updates the current display unit. Example values: `m`, `s`, `h`, `2 h`, `10 m`, `auto`. */
            unit?: string, 
            /** When setting the display unit, specifies if the chart animates the transition. */
            animate?: boolean, 
            /** Deprecated as of 1.14.0. */
            rescale?: boolean): string;
        public exportAggregatedVisibleData(): Array<Array<string | number>>;
        public exportVisibleData(): Array<Array<string | number>>;
        /** Gets the currently enabled series */
        public getEnabledSeries(): Array<Configuration.TimeChartSettingsSeries>;
        public getNumAggregatedVisibleColumns(): number;
        /** Gets all series even those that are not enabled */
        public getSeries(): Array<Configuration.TimeChartSettingsSeries>;
        /** Returns the display period currently selected by the display toolbar */
        public getToolbarDisplayPeriod(): string;
        /** Adds event listener. */
        public on(
            /** The type of the event for which the listener will be added. See method overloads for valid values. */
            name: string, 
            /** The callback function. It receives two arguments - the mouse event data and a separate object containing chart specific information. */
            listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartEventArguments) => void): void;
        /** Adds an event listener for when the scroll animation completes. */
        public on(name: "animationDone", listener: (event: Configuration.BaseMouseEvent, args: Configuration.TimeChartChartEventArguments) => void): void;
        public on(name: "chartUpdate", listener: (event: Configuration.BaseMouseEvent, args: Configuration.TimeChartChartEventArguments) => void): void;
        public on(name: "click", listener: (event: Configuration.BaseMouseEvent, args: Configuration.TimeChartChartEventArguments) => void): void;
        public on(name: "doubleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.TimeChartChartEventArguments) => void): void;
        public on(name: "error", listener: (
                /** An empty mouse event. */
                event: Configuration.BaseMouseEvent, args: Configuration.BaseChartErrorEventArguments) => void): void;
        public on(name: "hoverChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.TimeChartChartEventArguments) => void): void;
        public on(name: "positionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.TimeChartChartEventArguments) => void): void;
        public on(name: "rightClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.TimeChartChartEventArguments) => void): void;
        public on(name: "selectionChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.TimeChartChartEventArguments) => void): void;
        public on(name: "settingsChange", listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartSettingsChangeEventArguments) => void): void;
        public on(name: "tripleClick", listener: (event: Configuration.BaseMouseEvent, args: Configuration.TimeChartChartEventArguments) => void): void;
        /** Replaces the data already in the data cache with the given values. */
        public replaceData(data: Configuration.TimeChartDataObject, 
            /** the ID of the data source that will be updated. The default value is `default`. */
            sourceId?: string): void;
        /** Replaces the existing series configuration with new one instead of merging it like `updateSettings`.
        @deprecated Use `replaceSettings({series: seriesData})` instead. */
        public replaceSeries(series: Array<Configuration.LinearChartSettingsSeries>): this;
        /** Updates the chart settings but instead of merging some settings that are arrays or dictionaries (such as `data`)
        these collections are replaced completely. For example, this allows removal of series or value axis within TimeChart. */
        public replaceSettings(changes: Configuration.TimeChartSettings): this;
        /** Scrolls the visible chart area left or right. */
        public scroll(
            /** how much to scroll */
            amount: string, 
            /** scroll with animation or without */
            animate?: boolean, 
            /** adjust the scroll to snap according to the current displayUnit
            
            The `amount` property format: `< amount unit` or `> amount unit`.
            - `<` scrolls to the left, `>` scrolls to the right
            - `amount`: integer amount of units to scroll
            - `unit`: one of the following: `page`, `bar`, `y`, `M`, `d`, `w`, `h`, `m`, `s`, `ms`.
            
            Examples:
            
            - `scroll("< 1 s")` - scrolls left 1 second, no animation
            - `scroll("> 10 y", true)` - scrolls right, 10 years with animation */
            snap?: boolean): void;
        /** Gets or sets the  selection in javascript timestamp (milliseconds). All timestamps are in UTC.
        
        Use `from: null, to: null` to remove selection. If the chart does not have a selection, the method
        returns `[null, null]`.
        
        Note that this method will return `[null, null]` if `moment-timezone` library is still being downloaded. */
        public selection(from?: number | Date | moment.Moment, to?: number | Date | moment.Moment): [number, number];
        /** Set displayed time range using period and anchor.
        
        See [`initialDisplayAnchor` and `initialDisplayPeriod` documentation][doc] for possible period / anchor values. 
        
        [doc]: https://zoomcharts.com/developers/en/time-chart/api-reference/settings.html#doc_navigation.initialDisplayAnchor */
        public setDisplayPeriod(period: string, anchor: number | "newestData" | "now" | "oldestData", animate?: boolean, unit?: string): void;
        /** Displays the info popup for a specified time interval. The interval must be visible on screen.
        
        Note that if [`info.enabled`](time-chart/api-reference/settings/info/enabled.html) is set to `false` this method
        still works. In this case the info popup shown by this method will not be hidden as the user hovers the mouse over
        the chart. */
        public showInfoPopup(
            /** UTC timestamp of the start of the interval (inclusive). The value will be automatically rounded down based on the current display unit.
            Passing `null` will hide the info popup. */
            from: number | Date | moment.Moment, 
            /** UTC timestamp of the end of the interval (non-inclusive). The value will be automatically rounded up based on the current display unit.
            If not specified, selects a single unit starting with the `from` timestamp. */
            to?: number | Date | moment.Moment, 
            /** Optional HTML code that will be used as the contents of the info popup. If this is not specified, the default contents will be generated. */
            contents?: string | HTMLElement): void;
        /** When the chart is animating, gets the target display unit (otherwise returns the current display unit). */
        public targetDisplayUnit(): string;
        /** When the chart is animating, gets the target time range (otherwise returns the current time range).
        
        This method is useful when there are related data objects (such as data tables or other charts) that have
        to be filtered based on the visible time range in the chart. By using `onChartUpdate` event and this
        method it is possible to start updating the page as soon as the animation change but do it for the values
        the chart is animating towards.
        
        If the data has not yet been loaded, this method returns `[null, null]`. */
        public targetTime(): [number, number];
        /** Lists the predefined themes for the chart. These can be used within the settings objects or via the `customize()` method:
        
        ```javascript 
        var chart = new ZoomCharts.$this({ theme: ZoomCharts.$this.themes.dark });
        chart.updateSettings({ theme: ZoomCharts.$this.themes.dark });
        chart.customize("dark");
        ``` */
        public static themes: {
            dark?: Configuration.TimeChartSettings;
            flat?: Configuration.TimeChartSettings;
            gradient?: Configuration.TimeChartSettings;
            round?: Configuration.TimeChartSettings;
            /** Disables all user interactions so that the initial view is always persisted. */
            static?: Configuration.TimeChartSettings;
        };
        /** Gets or sets the displayed time range in JavaScript timestamp (milliseconds). Note that both 
        `from` and `to` must be specified for the time range to be updated.
        
        All timestamps are specified in UTC.
        
        Note that this method will return `[null, null]` if `moment-timezone` library is still being downloaded. */
        public time(from?: number | Date | moment.Moment, to?: number | Date | moment.Moment, animate?: boolean): [number, number];
        /** Updates the chart settings. Only the settings that have to be changed should be passed. Note that some arrays
        and dictionaries (such as `data`) are merged by the ID values - if instead they should be replaced, use
        [`replaceSettings()`](#doc_replaceSettings) method. */
        public updateSettings(changes: Configuration.TimeChartSettings): this;
        /** Decreases the visible time range on the chart.
        
        Has no effect if the chart data has not been yet loaded. */
        public zoomIn(
            /** the target unit in form `1 d`; if not specified, the unit is determined automatically. */
            unit?: string, 
            /** the UTC timestamp that should be the new center of the visible area. */
            center?: number | Date | moment.Moment, 
            /** determines if the zoom animation is executed. */
            animate?: boolean): void;
        /** Increases the visible time range on the chart.
        
        Has no effect if the chart data has not been yet loaded. */
        public zoomOut(
            /** the target unit in form `1 d`; if not specified, the unit is determined automatically. */
            unit?: string, 
            /** determines if the zoom animation is executed. */
            animate?: boolean): void;
    }
    /* tslint:enable */
}

declare class FacetChart extends ZoomCharts.FacetChart { }
declare class GeoChart extends ZoomCharts.GeoChart { }
declare class NetChart extends ZoomCharts.NetChart { }
declare class PieChart extends ZoomCharts.PieChart { }
declare class TimeChart extends ZoomCharts.TimeChart { }

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

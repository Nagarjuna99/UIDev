var contentConfig = function() {

  var defaultValues = {
    nodeName: 'WPP::L3389A8E3',
    nodeType: 'site_context',
    assetType: 'content_bundle',
    contentType: 'content_bundle',
    channel: 'mobile',
    defaultNAT: true,
    locale: 'en-us',
    region: 'NAT'
  };
  var regions = {
    "MRN": "NCA",
    "SCA": "SCA",
    "HAW": "HI",
    "KNW": "NW",
    "MID": "MID",
    "GGA": "GA",
    "COL": "CCO",
    "OHI": "OH"
  };
  var channels = {
    Mobile: 'mobile',
    Web: 'web'
  };
  var nodeType = {
    Embedded: 'embedded',
    SiteContent: 'site_content',
    Intro: 'intro'
  };
  var assetType = {
    Ancillary: 'ancillary',
    ContentBundle: 'content_bundle'
  };
  var contentTypes = {
    ContentBundle: 'content_bundle',
    Help: "help"
  };
  var flavors = {
    'allergies': {
      nodeName: 'WPP::L48GVEMDE',
      assetType: assetType.Ancillary,
      contentType: contentTypes.Help,
      channel: channels.Web,
      htmlContent: true
    },
    'health-condition': {
      nodeName: 'WPP::L4DLI5IKT',
      assetType: assetType.Ancillary,
      contentType: contentTypes.Help,
      channel: channels.Web,
      htmlContent: true
    },
    'immunizations': {
      nodeName: 'WPP::L4DLGKM4K',
      assetType: assetType.Ancillary,
      contentType: contentTypes.Help,
      channel: channels.Web,
      htmlContent: true
    },
    'health-care-reminders': {
      nodeName: 'WPP::L4DLEXM9R',
      assetType: assetType.Ancillary,
      contentType: contentTypes.Help,
      channel: channels.Web,
      htmlContent: true
    },
    'test-results': {
      nodeName: 'WPP::L4DLJ05XX',
      assetType: assetType.Ancillary,
      contentType: contentTypes.Help,
      channel: channels.Web,
      htmlContent: true
    }
  };
  return {
    defaultValues: defaultValues,
    Regions: regions,
    Channels: channels,
    NodeType: nodeType,
    AssetType: assetType,
    ContentTypes: contentTypes,
    Flavors: flavors
  };
};
export default contentConfig();


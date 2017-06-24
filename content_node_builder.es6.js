import _ from 'underscore';
import builder_stub from 'builders/builder_stub';

export default function() {

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

  return builder_stub(defaultValues);

}


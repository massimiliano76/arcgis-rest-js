/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

import { request, cleanUrl } from "@esri/arcgis-rest-request";

import { worldGeocoder, IEndpointRequestOptions } from "./helpers";

export interface ISuggestResponse {
  suggestions: Array<{
    text: string;
    magicKey: string;
    isCollection: boolean;
  }>;
}

/**
 * ```js
 * import { suggest } from '@esri/arcgis-rest-geocoder';
 * //
 * suggest("Starb")
 *   .then(response) // response.text === "Starbucks"
 * ```
 * Used to return a placename [suggestion](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm) for a partial string.
 *
 * @param requestOptions - Options for the request including authentication and other optional parameters.
 * @returns A Promise that will resolve with the data from the response.
 */
export function suggest(
  partialText: string,
  requestOptions?: IEndpointRequestOptions
): Promise<ISuggestResponse> {
  const options: IEndpointRequestOptions = {
    endpoint: worldGeocoder,
    params: {},
    ...requestOptions
  };

  options.params.text = partialText;

  return request(`${cleanUrl(options.endpoint)}/suggest`, options);
}

export default {
  suggest
};

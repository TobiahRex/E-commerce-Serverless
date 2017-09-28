/**
* Name: 'createEmailProductList'
* Dynamically generate a list of Products for the customers invoice email.
*
* @param {string} emailDoc - A long HTML string.
* @param {array} cart - And array of products.
*
* @return {string} productListHtmlString - The final resulting html string with the dynamically generated product rows.
*/
export default function createEmailProductList(emailDoc, cart) {
  const productListHtmlString = cart.reduce((accum, next) => {
    accum += `
    <div style="background-color:transparent;">
      <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;width: 500px;width: calc(19000% - 98300px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
        <div style="border-collapse: collapse;display: table;width: 100%;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
              <!--[if (mso)|(IE)]><td align="center" width="496" style=" width:496px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 2px solid #365899; border-bottom: 1px solid #365899; border-right: 2px solid #365899;" valign="top"><![endif]-->
            <div class="col num12" style="min-width: 320px;max-width: 500px;width: 496px;width: calc(18000% - 89500px);background-color: transparent;">
              <div style="background-color: transparent; width: 100% !important;">
              <!--[if (!mso)&(!IE)]><!-->
              <div style="border-top: 0px solid transparent; border-left: 2px solid #365899; border-bottom: 1px solid #365899; border-right: 2px solid #365899; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->
                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 0px;"><![endif]-->
                <div style="color:#555555;line-height:120%;font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 0px;">
                <div style="font-size:12px;line-height:14px;color:#555555;font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;text-align:left;">
                    <p style="margin: 0;font-size: 12px;line-height: 14px">
                      <span style="font-size: 14px; line-height: 16px; color: rgb(54, 88, 153);">
                        <strong>
                          <span style="line-height: 16px; font-size: 14px;">
                            ${next.product.title.en}
                          </span>
                        </strong>
                      </span>
                    </p>
                  </div>
                </div>
                <!--[if mso]></td></tr></table><![endif]-->
                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;"><![endif]-->
                <div style="color:#555555;line-height:120%;font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;">
                <div style="font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;font-size:12px;line-height:14px;color:#555555;text-align:left;">
                    <p style="margin: 0;font-size: 12px;line-height: 14px">
                      <span style="color: rgb(54, 88, 153); font-size: 12px; line-height: 14px;">
                        Nicotine Strength:
                        <em>${next.product.nicotineStrength}mg
                        </em>
                      </span>
                    </p>
                  </div>
                </div>
                <!--[if mso]></td></tr></table><![endif]-->
                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 5px;"><![endif]-->
                <div style="color:#555555;line-height:120%;font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 5px;">
                  <div style="font-size:12px;line-height:14px;color:#555555;font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;text-align:left;">
                    <p style="margin: 0;font-size: 12px;line-height: 14px">
                      <span style="color: rgb(54, 88, 153); font-size: 10px; line-height: 12px;">
                        SKU: ${next.product.sku}
                      </span>
                    </p>
                  </div>
                </div>
                <!--[if mso]></td></tr></table><![endif]-->
                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 0px;"><![endif]-->
                <div style="color:#555555;line-height:120%;font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 0px;">
                  <div style="font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;font-size:12px;line-height:14px;color:#555555;text-align:left;">
                    <p style="margin: 0;font-size: 12px;line-height: 14px">
                      <span style="color: rgb(54, 88, 153); font-size: 12px; line-height: 14px;">
                        Unit Price:
                        <em>
                          $ ${Number(next.product.price).toFixed(2)}
                        </em>
                      </span>
                    </p>
                  </div>
                </div>
                <!--[if mso]></td></tr></table><![endif]-->
                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;"><![endif]-->
                <div style="color:#555555;line-height:120%;font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;">
                <div style="font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;font-size:12px;line-height:14px;color:#555555;text-align:left;">
                    <p style="margin: 0;font-size: 12px;line-height: 14px">
                      <span style="color: rgb(54, 88, 153); font-size: 12px; line-height: 14px;">
                        Qty:
                        <em>
                          (${next.qty})
                        </em>
                      </span>
                    </p>
                  </div>
                </div>
                <!--[if mso]></td></tr></table><![endif]-->
                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 5px;"><![endif]-->
                <div style="color:#555555;line-height:120%;font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 5px;">
                <div style="font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;font-size:12px;line-height:14px;color:#555555;text-align:left;">
                    <p style="margin: 0;font-size: 12px;line-height: 14px">
                      <span style="color: rgb(54, 88, 153); font-size: 12px; line-height: 14px;">
                        Subtotal:
                        <em>
                          $ ${(Number(next.product.price) * Number(next.qty)).toFixed(2)}
                        </em>
                      </span>
                    </p>
                  </div>
                </div>
                <!--[if mso]></td></tr></table><![endif]-->
                <!--[if (!mso)&(!IE)]><!-->
                </div>
                <!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
        </div>
      `;
    return accum;
  }, '');

  return productListHtmlString;
}

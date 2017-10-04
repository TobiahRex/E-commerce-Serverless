import m from 'moment';

const dynamicOrderTemplate = `
<div style="background-color:transparent;">
  <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="496" style=" width:496px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 1px solid #0068A5; border-left: 2px solid #0068A5; border-bottom: 0px solid #0068A5; border-right: 2px solid #0068A5;" valign="top"><![endif]-->
        <div class="col num12" style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;">
          <div style="background-color: transparent; width: 100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top: 1px solid #0068A5; border-left: 2px solid #0068A5; border-bottom: 0px solid #0068A5; border-right: 2px solid #0068A5; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->
                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
            <div style="color:#555555;line-height:200%;font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
              <div style="font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:12px;line-height:24px;color:#555555;text-align:left;">
                <p style="margin: 0;font-size: 12px;line-height: 24px"><span style="font-size: 18px; line-height: 36px;"><strong><span style="line-height: 36px; color: rgb(54, 88, 153); font-size: 18px;">

                  QTY_HERE.

                </span></strong></span><span style="font-size: 12px; line-height: 24px;"><strong><span style="line-height: 24px; color: rgb(54, 88, 153); font-size: 12px;"><br /><span style="line-height: 24px; font-size: 12px;">Reference #: </span></span></strong><span style="font-size: 14px; line-height: 28px;">
                  <span style="line-height: 28px; color: rgb(255, 0, 0); font-size: 14px;">

                    REFERENCE_ID_HERE

                  </span>
                  <strong>
                    <span style="line-height: 28px; color: rgb(54, 88, 153); font-size: 14px;">&#160;</span></strong></span></span>
                </p>
                <p style="margin: 0;font-size: 12px;line-height: 24px"><span style="font-size: 12px; line-height: 24px;">
                  <strong>
                    <span style="line-height: 24px; color: rgb(54, 88, 153); font-size: 12px;">
                      Name:&nbsp;
                  </span>
                </strong>
                  <span style="line-height: 24px; color: rgb(54, 88, 153); font-size: 12px;">

                    CUSTOMER_NAME_HERE

                  </span>
                </span>
                </p>
              </div>
            </div>
<!--[if mso]></td></tr></table><![endif]-->


          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>
`;

export default (dbEmail, dbOrders) => {
  let totalOrders = 0;

  const customerOrders = dbOrders.reduce((a, n, i) => {
    if (n && typeof n === 'object') {
      totalOrders += 1;

      a += dynamicOrderTemplate
      .replace(/QTY_HERE/g, (i + 1))
      .replace(/REFERENCE_ID_HERE/g, n.shippingAddress.referenceId)
      .replace(/CUSTOMER_NAME_HERE/g, n.shippingAddress.customerName);

      return a;
    }
    return a;
  }, '');
  const htmlBody = dbEmail[0].bodyHtmlData;

  htmlBody
  .replace(/DATE_HERE/g, m().format('LL'))
  .replace(/CUSTOMER_ORDERS_HERE/g, customerOrders)
  .replace(/TOTAL_ORDERS_HERE/g, totalOrders);

  return htmlBody;
};

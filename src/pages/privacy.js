import React from 'react';
import {Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Privacy = () => {
  return (
    <div style={{width:"90%", margin: '0 auto'}}>
        <Typography variant="h6" gutterBottom sx={{marginTop:'5px', padding:'20px'}} > プライバシーポリシー </Typography> 
        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 個人情報取扱規約 </Typography>
        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 【株式会社ビジネスビジョン】</Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
            株式会社ビジネスビジョン（以下、当社といいます）は、お客様からご提供いただく個人情報を本規約に従って取り扱っております。従いまして本規約は、当社がご提供する全てのサービス（以下、当社サービスといいます）をご利用頂く上でのご承諾事項となりますので、必ずご確認頂きますようお願いいたします。
        </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第1条　個人情報の取扱いについて </Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
            当社は、当社サービスをご利用になる方のプライバシーを尊重し、個人情報の管理に細心の注意を払い、これを取扱うものとします。
        </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第2条　個人情報の定義 </Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
            個人情報とは、利用者個人に関する情報であって、当該情報を構成する氏名、住所、電話番号、メールアドレス、学校名その他の記述等により当該利用者を識別できるものをいいます。また、その情報のみでは識別できない場合でも、他の情報と容易に照合することができ、結果的に利用者個人を識別できるものも個人情報に含まれます。
        </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第3条　個人情報の利用目的 </Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        当社は、当社サービスの提供にあたり、以下に定める目的の範囲内で個人情報を取得し、適切に利用します。<br />
 (1) 	当社サービスに関する情報提供およびこれらに関連するサービスの提供 <br />
(2) 	当社からの各種連絡・メールマガジン・ＤＭ・お知らせ等の配信・送付 <br />
(3) 	就職・就業後の状況確認およびサービス向上を目的としたご意見、ご要望等の聴取 <br />
(4) サービス提供期間中またはサービス終了後における応募、入社等の事実に関する求人企業への確認および求人企業からの通知の受領 <br />
(5) サービスの開発およびマーケティング <br />
 (6) 	お問い合わせ、ご相談および苦情への対応ならびに紛争の解決
            </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第4条　個人情報の第三者への提供 </Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        当社は、当社サービスを行うため、個人情報の適切な取扱いに関する事項を含む契約を結んだ求人企業に対し個人情報を提供します。また当社は、求人企業に個人情報を提供した場合には、就職・就業後の状況確認等を行うために個人情報を利用することがあります。 また、以下の場合は、個人情報を求人企業以外の第三者に提供することがあります。 <br />
(1) 	利用者本人から明示的に第三者への開示または提供を求められた場合 <br />
(2) 裁判所、検察庁、警察またはこれらに準じた権限を有する機関から、個人情報についての開示を求められた場合 <br />
(3) 	国の機関若しくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合で、利用者本人の同意を得ることによりその事務の遂行に支障を及ぼすおそれがある場合 <br />
(4) 	法令の定めに従って開示または提供する場合 <br />
(5)	公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、利用者本人の承諾を得ることが困難である場合 <br />
 (6) 利用者が第三者に不利益を及ぼすと判断した場合
        </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第5条　個人情報の外部委託 </Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        当社は、個人情報を取扱う業務の一部または全部を外部委託することがあります。当該委託先に個人情報の開示を行う場合には、十分な個人情報保護水準を確保していることを条件として委託先を選定し、機密保持契約を結んだ上で開示します。
        </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第6条　個人情報の開示、訂正、利用停止等 </Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        個人情報の利用目的の通知、登録した個人情報の開示、訂正、追加または削除、ならびに利用停止、消去、または第三者への提供の停止（以下「個人情報の開示等」といいます）の依頼を受けた場合は、原則として利用者本人のご依頼に限り、当社の社内規程に従って対応します。ただし、以下の場合については個人情報の開示等の依頼にお応えできないことがあります。<br />
(1) 	利用者本人または第三者の生命、身体、財産その他の権利・利益を害するおそれがある場合 <br /> (2) 	当社の業務に支障を及ぼすおそれがある場合 <br />(3) 	法令に違反することとなる場合<br />
(4) 	当該個人情報の変更等に多額の費用を要する場合､その他、個人情報の変更等を行うことが困難な場合であって、利用者の権利・利益を保護するため必要なこれに代わるべき措置をとる場合
        </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第7条　個人情報保護管理者 </Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        個人情報保護管理者は、当社の代表取締役とします。
        </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第8条　問い合わせ </Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        個人情報に関するお問い合わせ先は、次の通りとします。 <br />
        部署名　人財事業部　エージェント・グループ <br />所在地　〒102-0093　東京都千代田区平河町<br />1-9-5　第三大盛丸平河町ビル1階 電　話　<br />03-3288-5660 メール　<br />
        info@b-vision.co.jp
        </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 【株式会社ビジネスビジョン】</Typography>
        <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
            株式会社ビジネスビジョン（以下、当社といいます）は、お客様からご提供いただく個人情報を本規約に従って取り扱っております。従いまして本規約は、当社がご提供する全てのサービス（以下、当社サービスといいます）をご利用頂く上でのご承諾事項となりますので、必ずご確認頂きますようお願いいたします。
        </Typography>

        <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 2018年10月1日　改定</Typography>
        
        <Button component={Link} to="/" variant="contained" color="primary" style={{marginBottom:'50px', marginTop:'20px'}}>
        前の画面に戻る
      </Button>
    </div>
  );
};

export default Privacy;
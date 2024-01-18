import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography,
  Collapse,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CheckboxAccordion = ({ title, checkboxes }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container sx={{display:'inline'}}>
          {checkboxes.map((checkbox, index) => (
            <Grid item key={index}>
              <FormControlLabel control={<Checkbox />} label={checkbox.label} />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

const NestedAccordion = ({ title, innerAccordions }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Handle dynamic height adjustment when inner accordion expands/collapses
    const handleResize = () => {
      if (expanded) {
        window.dispatchEvent(new Event('resize'));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [expanded]);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {innerAccordions.map((innerAccordion, index) => (
            <CheckboxAccordion
              key={index}
              title={innerAccordion.title}
              checkboxes={innerAccordion.checkboxes}
            />
          ))}
        </Collapse>
      </AccordionDetails>
    </Accordion>
  );
};

const AccordianBasicInfo = () => {
  const accordionData = [
    {
      title: 'オプションを選んでください',
      innerAccordions: [
        {
          title: 'IT・インタネット・ゲーム',
          checkboxes: [
            { label: 'IT' },
            { label: '通信キャリア' },
            { label: 'インターネット広告・メディア' },
            { label: 'Web制作・Webデザイン' },
            { label: 'ゲーム' },
            { label: 'IT・インターネット・ゲーム（その他）' },
          ],
        },
        {
          title: 'メーカー',
          checkboxes: [
            { label: 'メーカー（コンピューター・通信系）' },
            { label: 'メーカー（電気・電子・半導体）' },
            { label: 'メーカー（自動車・輸送機器）' },
            { label: 'メーカー（機械）' },
            { label: 'メーカー（化学・素材）' },
            { label: 'メーカー（食品）' },
            { label: 'メーカー（医療品・医療機器）' },
            { label: 'メーカー（ファッション・アパレル）' },
            { label: 'メーカー（日用品・化粧品）' },
            { label: 'メーカー（その他）' },
          ],
        },
        {
          title: '商社',
          checkboxes: [
            { label: '商社（総合）' },
            { label: '商社（化学・石油・ガラス・セラミック・セメント）' },
            { label: '商社（鉄鋼・金属）' },
            { label: '商社（住宅・建材・エクステリア）' },
            { label: '商社（医療品・化粧品・バイオ）' },
            { label: '商社（食品）' },
            { label: '商社（紙・パルプ）' },
            { label: '商社（ファッション・アパレル）' },
            { label: '商社（インテリア）' },
            { label: '商社（その他）' },
          ],
        },
        {
          title: '流通・小売・サービス',
          checkboxes: [
            { label: '流通・小売（百貨店・スーパー・コンビニ）' },
            { label: '流通・小売（ファッション・アパレル）' },
            { label: '流通・小売（医薬品・化粧品）' },
            { label: '流通・小売（食品）' },
            { label: '流通・小売（家電）' },
            { label: '通信販売' },
            { label: 'フード・レストラン' },
            { label: 'レジャー・アミューズメント' },
            { label: 'ホテル・観光' },
            { label: '人材ビジネス' },
            { label: 'コールセンター' },
            { label: '流通・小売・サービス（その他）' },
          ],
        },
        {
          title: '広告・出版・マスコミ',
          checkboxes: [
            { label: '放送・広告・印刷・出版' },
          ],
        },
        {
          title: 'コンサルティング',
          checkboxes: [
            { label: 'コンサルティングファーム・シンクタンク' },
          ],
        },
        {
          title: '金融',
          checkboxes: [
            { label: '金融（銀行）' },
            { label: '金融（保険）' },
            { label: '金融（証券）' },
            { label: '金融（その他）' },
          ],
        },
        {
          title: '建設・不動産',
          checkboxes: [
            { label: '不動産' },
            { label: '建築・土木' },
          ],
        },
        {
          title: 'メディカル',
          checkboxes: [
            { label: '医療' },
            { label: '福祉・介護' },
          ],
        },
        {
          title: '物流・運輸',
          checkboxes: [
            { label: '物流・倉庫' },
            { label: '陸運・海運・航空・鉄道' },
          ],
        },
        {
          title: 'その他（インフラ・教育・官公庁など）',
          checkboxes: [
            { label: '電気・ガス・水道' },
            { label: '教育・学校' },
            { label: '団体・連合会・官公庁' },
            { label: 'その他業種' },
          ],
        },
      ],
    },
    // Add more accordions or inner accordions as needed
  ];

  return (
    <div>
      {accordionData.map((accordion, index) => (
        'innerAccordions' in accordion ? (
          <NestedAccordion
            key={index}
            title={accordion.title}
            innerAccordions={accordion.innerAccordions}
          />
        ) : (
          <CheckboxAccordion key={index} title={accordion.title} checkboxes={accordion.checkboxes} />
        )
      ))}
    </div>
  );
};

export default AccordianBasicInfo;

package com.react.exam.controller;

import com.react.exam.domain.BodyPart;
import com.react.exam.domain.BodyType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/bodyTypes")
public class BodyTypeController {

    @GetMapping
    public List<BodyType> getAllBodyTypes() {
        // BodyType 객체의 배열을 생성하고 반환합니다.
        return Arrays.asList(getBodyTypesArray());
    }

    // BodyType 객체 배열을 생성하는 유틸리티 메서드
    private BodyType[] getBodyTypesArray() {
        BodyType[] bodyTypes = new BodyType[64];

        for (int i = 0; i < 64; i++) {

            BodyPart[] upperBodyTypes = new BodyPart[8];
            BodyPart[] lowerBodyTypes = new BodyPart[8];
            List<Integer>[] avatarFileNumbers = new List[64];
            List<Integer>[] refImageNumbers = new List[64];
            List<String>[] featureTexts = new List[64];

            // 데이터 설정
            // 예를 들어, 아래는 임시 데이터 설정 코드입니다.
            int upperIndex = i / 8;

            if (upperIndex == 0) {
                upperBodyTypes[upperIndex] = new BodyPart("노는게젤좋아", "UpperTypeUrl1");
            } else if (upperIndex == 1) {
                upperBodyTypes[upperIndex] = new BodyPart("이구역귀요미는나", "UpperTypeUrl2");
            } else if (upperIndex == 2) {
                upperBodyTypes[upperIndex] = new BodyPart("알럽유쏘마치", "UpperTypeUrl2");
            } else if (upperIndex == 3) {
                upperBodyTypes[upperIndex] = new BodyPart("심장에매력발산중", "UpperTypeUrl2");
            } else if (upperIndex == 4) {
                upperBodyTypes[upperIndex] = new BodyPart("상큼이공주등장", "UpperTypeUrl2");
            } else if (upperIndex == 5) {
                upperBodyTypes[upperIndex] = new BodyPart("나만보인단말야", "UpperTypeUrl2");
            } else if (upperIndex == 6) {
                upperBodyTypes[upperIndex] = new BodyPart("앙큼섹시우주대스타", "UpperTypeUrl2");
            } else if (upperIndex == 7) {
                upperBodyTypes[upperIndex] = new BodyPart("난내게반했어", "UpperTypeUrl2");
            }

            int lowerIndex = i % 8;
            if (lowerIndex == 0) {
                lowerBodyTypes[lowerIndex] = new BodyPart("나무늘보", "나무늘보Url");
            } else if (lowerIndex == 1) {
                lowerBodyTypes[lowerIndex] = new BodyPart("펭귄", "펭귄Url");
            } else if (lowerIndex == 2) {
                lowerBodyTypes[lowerIndex] = new BodyPart("수달", "수달Url");
            } else if (lowerIndex == 3) {
                lowerBodyTypes[lowerIndex] = new BodyPart("사슴", "사슴Url");
            } else if (lowerIndex == 4) {
                lowerBodyTypes[lowerIndex] = new BodyPart("고슴도치", "고슴도치Url");
            } else if (lowerIndex == 5) {
                lowerBodyTypes[lowerIndex] = new BodyPart("강아지", "강아지Url");
            } else if (lowerIndex == 6) {
                lowerBodyTypes[lowerIndex] = new BodyPart("원숭이", "원숭이Url");
            } else if (lowerIndex == 7) {
                lowerBodyTypes[lowerIndex] = new BodyPart("코알라", "코알라Url");
            }
            //상큼, 나만보여, 앙큼섹시, 넌내게

            if (i == 0) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31521, 31531, 41521, 41531, 41522,
                        41532, 51521, 51531, 51522, 51532, 51523, 51533));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{101,102,103,104,105,
                        1101,1102,1103,1104,1105}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "곡선 골반"));
                //노는게젤좋아 나무늘보
            } else if (i ==1) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31541, 31551, 41541, 41551, 41542,
                        41552, 51541, 51551, 51542, 51552, 51543, 51553));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{101,102,103,104,105,
                        1201,1202,1203,1204,1205}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "곡선 골반"));
                //노는게젤좋아 펭귄
            } else if (i == 2) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31131, 41131, 41132, 51131, 51132, 51133,
                        31141, 41141, 41142, 51141, 51142, 51143, 31241, 41241, 41242, 51241, 51242, 51243,
                        31251, 41251, 41252, 51251, 51252, 51253, 31351, 41351, 41352, 51351, 51352, 51353));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{101,102,103,104,105,
                        1301,1302,1303,1304,1305}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "사선 골반"));
                //노는게젤좋아 수달
            } else if (i == 3) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31151, 41151, 41152, 51151, 51152, 51153,
                        31441, 41441, 41442, 51441, 51442, 51443, 31451,41451, 41452, 51451, 51452, 51453));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{101,102,103,104,105,
                        1401,1402,1403,1404,1405}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "사선 골반"));
                //노는게젤좋아 사슴
            } else if (i == 4) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31411,41411, 41412, 51411, 51412, 51413,
                        31511,41511, 41512, 51511, 51512, 51513));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{101,102,103,104,105,
                        1501,1502,1503,1504,1505}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "직각 골반"));
                //노는게젤좋아 고슴도치
            } else if (i == 5) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31421,41421, 41422, 51421, 51422, 51423,
                        31431,41431, 41432, 51431, 51432, 51433));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{101,102,103,104,105,
                        1601,1602,1603,1604,1605}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "직각 골반"));
                //노는게젤좋아 강아지
            } else if (i == 6) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31111,41111, 41112, 51111, 51112, 51113,
                        31121,41121, 41122, 51121, 51122, 51123, 31211,41211, 41212, 51211, 51212, 51213,
                        31221,41221, 41222, 51221, 51222, 51223, 31311,41311, 41312, 51311, 51312, 51313));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{101,102,103,104,105,
                        1701,1702,1703,1704,1705}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "직선 골반"));
                //노는게젤좋아 원숭이
            } else if (i == 7) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31231,41231, 41232, 51231, 51232, 51233,
                        31321,41321, 41322, 51321, 51322, 51323, 31331,41331, 41332, 51331, 51332, 51333,
                        31341,41341, 41342, 51341, 51342, 51343));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{101,102,103,104,105,
                        1801,1802,1803,1804,1805}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "직선 골반"));
                //노는게젤좋아 코알라
            } else if (i == 8) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30521, 40521, 40522, 50521, 50522, 50523,
                        30531, 40531, 40532, 50531, 50532, 50533));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{201,202,203,204,205,
                        1101,1102,1103,1104,1105}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "곡선 골반"));
                //이구역귀요미는나 나무늘보
            } else if (i == 9) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30541, 40541, 40542, 50541, 50542, 50543,
                        30551, 40551, 40552, 50551, 50552, 50553));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{201,202,203,204,205,
                        1201,1202,1203,1204,1205}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "곡선 골반"));
                //이구역귀요미는나 펭귄
            } else if (i == 10) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30131, 40131, 40132, 50131, 50132, 50133,
                        30141, 40141, 40142, 50141, 50142, 50143, 30241, 40241, 40242, 50241, 50242, 50243,
                        30251, 40251, 40252, 50251, 50252, 50253, 30351, 40351, 40352, 50351, 50352, 50353));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{201,202,203,204,205,
                        1301,1302,1303,1304,1305}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "사선 골반"));
                //이구역귀요미는나 수달
            } else if (i == 11) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30151, 40151, 40152, 50151, 50152, 50153,
                        30441, 40441, 40442, 50441, 50442, 50443, 30451, 40451, 40452, 50451, 50452, 50453));
                refImageNumbers[i] = new ArrayList<Integer>(List.of(new Integer[]{201,202,203,204,205,
                        1401,1402,1403,1404,1405}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "사선 골반"));
                //이구역귀요미는나 사슴
            } else if (i == 12) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30411, 40411, 40412, 50411, 50412, 50413,
                        30511, 40511, 40512, 50511, 50512, 50513));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{201,202,203,204,205,
                        1501,1502,1503,1504,1505}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "직각 골반"));
                //이구역귀요미는나 고슴도치
            } else if (i == 13) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30421, 40421, 40422, 50421, 50422, 50423,
                        30431, 40431, 40432, 50431, 50432, 50433));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{201,202,203,204,205,
                        1601,1602,1603,1604,1605}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "직각 골반"));
                //이구역귀요미는나 강아지
            } else if (i == 14) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30111, 40111, 40112, 50111, 50112, 50113,
                        30121, 40121, 40122, 50121, 50122, 50123, 30211, 40211, 40212, 50211, 50212, 50213,
                        30221, 40221, 40222, 50221, 50222, 50223, 30311, 40311, 40312, 50311, 50312, 50313));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{201,202,203,204,205,
                        1701,1702,1703,1704,1705}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "직선 골반"));
                //이구역귀요미는나 원숭이
            } else if (i == 15) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30231, 40231, 40232, 50231, 50232, 50233,
                        30321, 40321, 40322, 50321, 50322, 50323, 30331, 40331, 40332, 50331, 50332, 50333,
                        30341, 40341, 40342, 50341, 50342, 50343));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{201,202,203,204,205,
                        1801,1802,1803,1804,1805}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "직선 골반"));
                //이구역귀요미는나 코알라
            } else if (i == 16) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11521, 11522, 21521, 21522, 21523, 31522, 31523,
                        11531,11532,21531,21532,21533,31532,31533));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{301,302,303,304,305,
                        1101,1102,1103,1104,1105}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "곡선 골반"));
                //알럽유쏘마치 나무늘보
            } else if (i == 17) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11541,11542,21541,21542,21543,31542,31543,
                        11551,11552,21551,21552,21553,31552,31553));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{301,302,303,304,305,
                        1201,1202,1203,1204,1205}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "곡선 골반"));
                //알럽유쏘마치 펭귄
            } else if (i == 18) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11131,11132,21131,21132,21133,31132,31133,
                        11141,11142,21141,21142,21143,31142,31143, 11241,11242,21241,21242,21243,31242,31243,
                        11251,11252,21251,21252,21253,31252,31253, 11251,11252,21251,21252,21253,31252,31253,
                        11351,11352,21351,21352,21353,31352,31353));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{301,302,303,304,305,
                        1301,1302,1303,1304,1305}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "사선 골반"));
                //알럽유쏘마치 수달
            } else if (i == 19) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11151,11152,21151,21152,21153,31152,31153,
                        11441,11442,21441,21442,21443,31442,31443, 11451,11452,21451,21452,21453,31452,31453));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{301,302,303,304,305,
                        1401,1402,1403,1404,1405}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "사선 골반"));
                //알럽유쏘마치 사슴
            } else if (i == 20) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11411,11412,21411,21412,21413,31412,31413,
                        11511,11512,21511,21512,21513,31512,31513));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{301,302,303,304,305,
                        1501,1502,1503,1504,1505}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "직각 골반"));
                //알럽유쏘마치 고슴도치
            } else if (i == 21) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11421,11422,21421,21422,21423,31422,31423,
                        11431,11432,21431,21432,21433,31432,31433));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{301,302,303,304,305,
                        1601,1602,1603,1604,1605}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "직각 골반"));
                //알럽유쏘마치 강아지
            } else if (i == 22) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11111,11112,21111,21112,21113,31112,31113,
                        11121,11122,21121,21122,21123,31122,31123,11211,11212,21211,21212,21213,31212,31213,
                        11221,11222,21221,21222,21223,31222,31223,11311,11312,21311,21312,21313,31312,31313));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{301,302,303,304,305,
                        1701,1702,1703,1704,1705}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "직선 골반"));
                //알럽유쏘마치 원숭이
            } else if (i == 23) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11231,11232,21231,21232,21233,31232,31233,
                        11321,11322,21321,21322,21323,31322,31323,11331,11332,21331,21332,21333,31332,31333,
                        11341,11342,21341,21342,21343,31342,31343));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{301,302,303,304,305,
                        1801,1802,1803,1804,1805}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "곡선 허리", "직선 골반"));
                //알럽유쏘마치 코알라
            } else if (i == 24) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10521, 10522, 20521, 20522, 20523, 30522, 30523,
                        10531, 10532, 20531, 20532, 20533, 30532, 30533));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{401,402,403,404,405,
                        1101,1102,1103,1104,1105}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "곡선 골반"));
                //심장에매력발산중 나무늘보
            } else if (i == 25) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10541, 10542, 20541, 20542, 20543, 30542, 30543,
                        10551, 10552, 20551, 20552, 20553, 30552, 30553));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{401,402,403,404,405,
                        1201,1202,1203,1204,1205}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "곡선 골반"));
                //심장에매력발산중 펭귄
            } else if (i == 26) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10131, 10132, 20131, 20132, 20133, 30132, 30133,
                        10141, 10142, 20141, 20142, 20143, 30142, 30143, 10241, 10242, 20241, 20242, 20243, 30242, 30243,
                        10251, 10252, 20251, 20252, 20253, 30252, 30253, 10351, 10352, 20351, 20352, 20353, 30352, 30353));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{401,402,403,404,405,
                        1301,1302,1303,1304,1305}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "사선 골반"));
                //심장에매력발산중 수달
            } else if (i == 27) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10151, 10152, 20151, 20152, 20153, 30152, 30153,
                        10441, 10442, 20441, 20442, 20443, 30442, 30443, 10451, 10452, 20451, 20452, 20453, 30452, 30453));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{401,402,403,404,405,
                        1401,1402,1403,1404,1405}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "사선 골반"));
                //심장에매력발산중 사슴
            } else if (i == 28) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10411, 10412, 20411, 20412, 20413, 30412, 30413,
                        10511, 10512, 20511, 20512, 20513, 30512, 30513));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{401,402,403,404,405,
                        1501,1502,1503,1504,1505}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "직각 골반"));
                //심장에매력발산중 고슴도치
            } else if (i == 29) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10421, 10422, 20421, 20422, 20423, 30422, 30423,
                        10431, 10432, 20431, 20432, 20433, 30432, 30433));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{401,402,403,404,405,
                        1601,1602,1603,1604,1605}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "직각 골반"));
                //심장에매력발산중 강아지
            } else if (i == 30) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10111, 10112, 20111, 20112, 20113, 30112, 30113,
                        10121, 10122, 20121, 20122, 20123, 30122, 30123, 10211, 10212, 20211, 20212, 20213, 30212, 30213,
                        10221, 10222, 20221, 20222, 20223, 30222, 30223, 10311, 10312, 20311, 20312, 20313, 30312, 30313));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{401,402,403,404,405,
                        1701,1702,1703,1704,1705}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "직선 골반"));
                //심장에매력발산중 원숭이
            } else if (i == 31) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10231, 10232, 20231, 20232, 20233, 30232, 30233,
                        10321, 10322, 20321, 20322, 20323, 30322, 30323, 10331, 10332, 20331, 20332, 20333, 30332, 30333,
                        10341, 10342, 20341, 20342, 20343, 30342, 30343));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{401,402,403,404,405,
                        1801,1802,1803,1804,1805}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "곡선 허리", "직선 골반"));
                //심장에매력발산중 코알라
            } else if (i == 32) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31524, 31525, 41523, 41524, 41525, 51524, 51525,
                        31534, 31535, 41533, 41534, 41535, 51534, 51535));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{501,502,503,504,505,
                        1101,1102,1103,1104,1105}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "곡선 골반"));
                //상큼이공주등장 나무늘보
            } else if (i == 33) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31544, 31545, 41543, 41544, 41545, 51544, 51545,
                        31554, 31555, 41553, 41554, 41555, 51554, 51555));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{501,502,503,504,505,
                        1201,1202,1203,1204,1205}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "곡선 골반"));
                //상큼이공주등장 펭귄
            } else if (i == 34) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31134, 31135, 41133, 41134, 41135, 51134, 51135,
                        31144, 31145, 41143, 41144, 41145, 51144, 51145, 31244, 31245, 41243, 41244, 41245, 51244, 51245,
                        31254, 31255, 41253, 41254, 41255, 51254, 51255, 31354, 31355, 41353, 41354, 41355, 51354, 51355));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{501,502,503,504,505,
                        1301,1302,1303,1304,1305}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "사선 골반"));
                //상큼이공주등장 수달
            } else if (i == 35) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31154, 31155, 41153, 41154, 41155, 51154, 51155,
                        31444, 31445, 41443, 41444, 41445, 51444, 51445, 31454, 31455, 41453, 41454, 41455, 51454, 51455));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{501,502,503,504,505,
                        1401,1402,1403,1404,1405}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "사선 골반"));
                //상큼이공주등장 사슴
            } else if (i == 36) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31414, 31415, 41413, 41414, 41415, 51414, 51415,
                        31514, 31515, 41513, 41514, 41515, 51514, 51515));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{501,502,503,504,505,
                        1501,1502,1503,1504,1505}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "직각 골반"));
                //상큼이공주등장 고슴도치
            } else if (i == 37) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31424, 31425, 41423, 41424, 41425, 51424, 51425,
                        31434, 31435, 41433, 41434, 41435, 51434, 51435));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{501,502,503,504,505,
                        1601,1602,1603,1604,1605}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "직각 골반"));
                //상큼이공주등장 강아지
            } else if (i == 38) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31114, 31115, 41113, 41114, 41115, 51114, 51115,
                        31124, 31125, 41123, 41124, 41125, 51124, 51125, 31214, 31215, 41213, 41214, 41215, 51214, 51215,
                        31224, 31225, 41223, 41224, 41225, 51224, 51225, 31314, 31315, 41313, 41314, 41315, 51314, 51315));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{501,502,503,504,505,
                        1701,1702,1703,1704,1705}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "직선 골반"));
                //상큼이공주등장 원숭이
            } else if (i == 39) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(31234, 31235, 41233, 41234, 41235, 51234, 51235,
                        31324, 31325, 41323, 41324, 41325, 51324, 51325, 31334, 31335, 41333, 41334, 41335, 51334, 51335,
                        31344, 31345, 41343, 41344, 41345, 51344, 51345));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{501,502,503,504,505,
                        1801,1802,1803,1804,1805}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "직선 골반"));
                //상큼이공주등장 코알라
            } else if (i == 40) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30524, 30525, 40523, 40524, 40525, 50524, 50525,
                        30534, 30535, 40533, 40534, 40535, 50534, 50535));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{601,602,603,604,605,
                        1101,1102,1103,1104,1105}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "곡선 골반"));
                //나만보인단말야 나무늘보
            } else if (i == 41) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30544, 30545, 40543, 40544, 40545, 50544, 50545,
                        30554, 30555, 40553, 40554, 40555, 50554, 50555));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{601,602,603,604,605,
                        1201,1202,1203,1204,1205}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "곡선 골반"));
                //나만보인단말야 펭귄
            } else if (i == 42) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30134, 30135, 40133, 40134, 40135, 50134, 50135,
                        30144, 30145, 40143, 40144, 40145, 50144, 50145, 30244, 30245, 40243, 40244, 40245, 50244, 50245,
                        30254, 30255, 40253, 40254, 40255, 50254, 50255, 30354, 30355, 40353, 40354, 40355, 50354, 50355));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{601,602,603,604,605,
                        1301,1302,1303,1304,1305}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "사선 골반"));
                //나만보인단말야 수달
            } else if (i == 43) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30154, 30155, 40153, 40154, 40155, 50154, 50155,
                        30444, 30445, 40443, 40444, 40445, 50444, 50445, 30454, 30455, 40453, 40454, 40455, 50454, 50455));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{601,602,603,604,605,
                        1401,1402,1403,1404,1405}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "사선 골반"));
                //나만보인단말야 사슴
            } else if (i == 44) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30414, 30415, 40413, 40414, 40415, 50414, 50415,
                        30514, 30515, 40513, 40514, 40515, 50514, 50515));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{601,602,603,604,605,
                        1501,1502,1503,1504,1505}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "직각 골반"));
                //나만보인단말야 고슴도치
            } else if (i == 45) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30424, 30425, 40423, 40424, 40425, 50424, 50425,
                        30434, 30435, 40433, 40434, 40435, 50434, 50435));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{601,602,603,604,605,
                        1601,1602,1603,1604,1605}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "직각 골반"));
                //나만보인단말야 강아지
            } else if (i == 46) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30114, 30115, 40113, 40114, 40115, 50114, 50115,
                        30124, 30125, 40123, 40124, 40125, 50124, 50125, 30214, 30215, 40213, 40214, 40215, 50214, 50215,
                        30224, 30225, 40223, 40224, 40225, 50224, 50225, 30314, 30315, 40313, 40314, 40315, 50314, 50315));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{601,602,603,604,605,
                        1701,1702,1703,1704,1705}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "직선 골반"));
                //나만보인단말야 원숭이
            } else if (i == 47) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(30234, 30235, 40233, 40234, 40235, 50234, 50235,
                        30324, 30325, 40323, 40324, 40325, 50324, 50325, 30334, 30335, 40333, 40334, 40335, 50334, 50335,
                        30344, 30345, 40343, 40344, 40345, 50344, 50345));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{601,602,603,604,605,
                        1801,1802,1803,1804,1805}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "직선 골반"));
                //나만보인단말야 코알라
            } else if (i == 48) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11523, 11524, 11525, 21524, 21525,
                        11533, 11534, 11535, 21534, 21535));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{701,702,703,704,705,
                        1101,1102,1103,1104,1105}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "곡선 골반"));
                //앙큼섹시우주대스타 나무늘보
            } else if (i == 49) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11543, 11544, 11545, 21544, 21545,
                        11553, 11554, 11555, 21554, 21555));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{701,702,703,704,705,
                        1201,1202,1203,1204,1205}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "곡선 골반"));
                //앙큼섹시우주대스타 펭귄
            } else if (i == 50) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11133, 11134, 11135, 21134, 21135,
                        11143, 11144, 11145, 21144, 21145, 11243, 11244, 11245, 21244, 21245,
                        11253, 11254, 11255, 21254, 21255, 11353, 11354, 11355, 21354, 21355));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{701,702,703,704,705,
                        1301,1302,1303,1304,1305}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "사선 골반"));
                //앙큼섹시우주대스타 수달
            } else if (i == 51) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11153, 11154, 11155, 21154, 21155,
                        11443, 11444, 11445, 21444, 21445, 11453, 11454, 11455, 21454, 21455));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{701,702,703,704,705,
                        1401,1402,1403,1404,1405}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "사선 골반"));
                //앙큼섹시우주대스타 사슴
            } else if (i == 52) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11413, 11414, 11415, 21414, 21415,
                        11513, 11514, 11515, 21514, 21515));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{701,702,703,704,705,
                        1501,1502,1503,1504,1505}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "직각 골반"));
                //앙큼섹시우주대스타 고슴도치
            } else if (i == 53) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11423, 11424, 11425, 21424, 21425,
                        11433, 11434, 11435, 21434, 21435));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{701,702,703,704,705,
                        1601,1602,1603,1604,1605}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "직각 골반"));
                //앙큼섹시우주대스타 강아지
            } else if (i == 54) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11113, 11114, 11115, 21114, 21115,
                        11123, 11124, 11125, 21124, 21125, 11213, 11214, 11215, 21214, 21215,
                        11223, 11224, 11225, 21224, 21225, 11313, 11314, 11315, 21314, 21315));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{701,702,703,704,705,
                        1701,1702,1703,1704,1705}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "직선 골반"));
                //앙큼섹시우주대스타 원숭이
            } else if (i == 55) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(11233, 11234, 11235, 21234, 21235,
                        11323, 11324, 11325, 21324, 21325, 11333, 11334, 11335, 21334, 21335,
                        11343, 11344, 11345, 21344, 21345));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{701,702,703,704,705,
                        1801,1802,1803,1804,1805}));
                featureTexts[i] = new ArrayList(Arrays.asList("사선 어깨", "통 허리", "직선 골반"));
                //앙큼섹시우주대스타 코알라
            } else if (i == 56) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10523, 10524, 10525, 20524, 20525,
                        10533, 10534, 10535, 20534, 20535));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{801,802,803,804,805,
                        1101,1102,1103,1104,1105}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "곡선 골반"));
                //난내게반했어 나무늘보
            } else if (i == 57) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10543, 10544, 10545, 20544, 20545,
                        10553, 10554, 10555, 20554, 20555));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{801,802,803,804,805,
                        1201,1202,1203,1204,1205}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "곡선 골반"));
                //난내게반했어 펭귄
            } else if (i == 58) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10133, 10134, 10135, 20134, 20135,
                        10143, 10144, 10145, 20144, 20145, 10243, 10244, 10245, 20244, 20245,
                        10253, 10254, 10255, 20254, 20255, 10353, 10354, 10355, 20354, 20355));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{801,802,803,804,805,
                        1301,1302,1303,1304,1305}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "사선 골반"));
                //난내게반했어 수달
            } else if (i == 59) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10153, 10154, 10155, 20154, 20155,
                        10443, 10444, 10445, 20444, 20445, 10453, 10454, 10455, 20454, 20455));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{801,802,803,804,805,
                        1401,1402,1403,1404,1405}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "사선 골반"));
                //난내게반했어 사슴
            } else if (i == 60) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10413, 10414, 10415, 20414, 20415,
                        10513, 10514, 10515, 20514, 20515));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{801,802,803,804,805,
                        1501,1502,1503,1504,1505}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "직각 골반"));
                //난내게반했어 고슴도치
            } else if (i == 61) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10423, 10424, 10425, 20424, 20425,
                        10433, 10434, 10435, 20434, 20435));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{801,802,803,804,805,
                        1601,1602,1603,1604,1605}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "직각 골반"));
                //난내게반했어 강아지
            } else if (i == 62) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10113, 10114, 10115, 20114, 20115,
                        10123, 10124, 10125, 20124, 20125, 10213, 10214, 10215, 20214, 20215,
                        10223, 10224, 10225, 20224, 20225, 10313, 10314, 10315, 20314, 20315));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{801,802,803,804,805,
                        1701,1702,1703,1704,1705}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "직선 골반"));
                //난내게반했어 원숭이
            } else if (i == 63) {
                avatarFileNumbers[i] = new ArrayList<>(List.of(10233, 10234, 10235, 20234, 20235,
                        10323, 10324, 10325, 20324, 20325, 10333, 10334, 10335, 20334, 20335,
                        10343, 10344, 10345, 20344, 20345));
                refImageNumbers[i] = new ArrayList<>(List.of(new Integer[]{801,802,803,804,805,
                        1801,1802,1803,1804,1805}));
                featureTexts[i] = new ArrayList(Arrays.asList("직각 어깨", "통 허리", "직선 골반"));
            }

            // BodyType 객체 생성


            bodyTypes[i] = new BodyType();
            bodyTypes[i].setData(upperBodyTypes, lowerBodyTypes, avatarFileNumbers, refImageNumbers, featureTexts);

        }
        return bodyTypes;
    }
}

// Audio base URL for Quran recitation
export const AUDIO_BASE_URL = 'https://cdn.islamic.network/quran/audio/128/ar.alafasy';

// Names and titles of Jesus in Islam
export const namesOfIsa = {
  primary: {
    arabic: 'عيسى',
    transliteration: 'Isa',
    meaning: 'Jesus'
  },
  titles: [
    { arabic: 'المسيح', transliteration: 'Al-Masih', meaning: 'The Messiah' },
    { arabic: 'ابن مريم', transliteration: 'Ibn Maryam', meaning: 'Son of Mary' },
    { arabic: 'كلمة الله', transliteration: 'Kalimatullah', meaning: 'Word of Allah' },
    { arabic: 'روح من الله', transliteration: 'Ruhun min Allah', meaning: 'Spirit from Allah' },
    { arabic: 'رسول الله', transliteration: 'Rasulullah', meaning: 'Messenger of Allah' },
    { arabic: 'عبد الله', transliteration: 'Abdullah', meaning: 'Servant of Allah' }
  ]
};

// Quranic verses about Jesus (Isa)
export const quranicVerses = [
  // Surah Al-Imran (3)
  {
    id: 1,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 45,
    arabic: 'إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ وَجِيهًا فِي الدُّنْيَا وَالْآخِرَةِ وَمِنَ الْمُقَرَّبِينَ',
    transliteration: 'Iz qalatil-malaaikatu ya Maryamu innallaha yubashshiruki bi kalimatim-minhu ismuhul-Masihu Isa-bnu Maryama wajihan fid-dunya wal-akhirati wa minal-muqarrabin',
    translation: 'When the angels said, "O Mary, indeed Allah gives you good tidings of a word from Him, whose name will be the Messiah, Jesus, the son of Mary - distinguished in this world and the Hereafter and among those brought near to Allah."',
    audioId: 395,
    theme: 'birth',
    topics: ['annunciation', 'titles', 'prophecy']
  },
  {
    id: 2,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 46,
    arabic: 'وَيُكَلِّمُ النَّاسَ فِي الْمَهْدِ وَكَهْلًا وَمِنَ الصَّالِحِينَ',
    transliteration: 'Wa yukallimun-nasa fil-mahdi wa kahlanw-wa minas-salihin',
    translation: 'He will speak to the people in the cradle and in maturity and will be of the righteous.',
    audioId: 396,
    theme: 'miracles',
    topics: ['speaking in cradle', 'righteousness']
  },
  {
    id: 3,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 47,
    arabic: 'قَالَتْ رَبِّ أَنَّىٰ يَكُونُ لِي وَلَدٌ وَلَمْ يَمْسَسْنِي بَشَرٌ ۖ قَالَ كَذَٰلِكِ اللَّهُ يَخْلُقُ مَا يَشَاءُ ۚ إِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ',
    transliteration: 'Qalat Rabbi anna yakunu li waladunw-wa lam yamsasni bashar; qala kazalikillahu yakhluqu ma yasha; iza qada amran fa innama yaqulu lahu kun fayakun',
    translation: 'She said, "My Lord, how will I have a child when no man has touched me?" The angel said, "Such is Allah; He creates what He wills. When He decrees a matter, He only says to it, \'Be,\' and it is."',
    audioId: 397,
    theme: 'birth',
    topics: ['virgin birth', 'divine power']
  },
  {
    id: 4,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 48,
    arabic: 'وَيُعَلِّمُهُ الْكِتَابَ وَالْحِكْمَةَ وَالتَّوْرَاةَ وَالْإِنجِيلَ',
    transliteration: 'Wa yu\'allimuhul-Kitaba wal-Hikmata wat-Tawrata wal-Injil',
    translation: 'And He will teach him writing and wisdom and the Torah and the Gospel.',
    audioId: 398,
    theme: 'mission',
    topics: ['knowledge', 'scripture', 'wisdom']
  },
  {
    id: 5,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 49,
    arabic: 'وَرَسُولًا إِلَىٰ بَنِي إِسْرَائِيلَ أَنِّي قَدْ جِئْتُكُم بِآيَةٍ مِّن رَّبِّكُمْ ۖ أَنِّي أَخْلُقُ لَكُم مِّنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ فَأَنفُخُ فِيهِ فَيَكُونُ طَيْرًا بِإِذْنِ اللَّهِ ۖ وَأُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ وَأُحْيِي الْمَوْتَىٰ بِإِذْنِ اللَّهِ ۖ وَأُنَبِّئُكُم بِمَا تَأْكُلُونَ وَمَا تَدَّخِرُونَ فِي بُيُوتِكُمْ ۚ إِنَّ فِي ذَٰلِكَ لَآيَةً لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ',
    transliteration: 'Wa Rasulan ila Bani Israila anni qad ji\'tukum bi-ayatim-mir-Rabbikum anni akhluqu lakum-minat-tini kahay\'atit-tayri fa-anfukhu fihi fayakunu tayram-bi-iznillah; wa ubri-ul-akmaha wal-abrasa wa uhyil-mawta bi-iznillah; wa unabbi-ukum bima ta\'kuluna wa ma taddakhiruna fi buyutikum; inna fi zalika la-ayatal-lakum in kuntum mu\'minin',
    translation: 'And make him a messenger to the Children of Israel, saying, "Indeed I have come to you with a sign from your Lord in that I design for you from clay that which is like the form of a bird, then I breathe into it and it becomes a bird by permission of Allah. And I cure the blind and the leper, and I give life to the dead - by permission of Allah. And I inform you of what you eat and what you store in your houses. Indeed in that is a sign for you, if you are believers."',
    audioId: 399,
    theme: 'miracles',
    topics: ['miracles', 'healing', 'messenger to Israel']
  },
  {
    id: 6,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 50,
    arabic: 'وَمُصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَلِأُحِلَّ لَكُم بَعْضَ الَّذِي حُرِّمَ عَلَيْكُمْ ۚ وَجِئْتُكُم بِآيَةٍ مِّن رَّبِّكُمْ فَاتَّقُوا اللَّهَ وَأَطِيعُونِ',
    transliteration: 'Wa musaddiqal-lima baina yadayya minat-Tawrati wa li-uhilla lakum ba\'dal-lazi hurrima \'alaikum; wa ji\'tukum bi-ayatim-mir-Rabbikum fattaqullaha wa ati\'un',
    translation: 'And I have come confirming what was before me of the Torah and to make lawful for you some of what was forbidden to you. And I have come to you with a sign from your Lord, so fear Allah and obey me.',
    audioId: 400,
    theme: 'mission',
    topics: ['confirming Torah', 'law', 'obedience']
  },
  {
    id: 7,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 51,
    arabic: 'إِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ ۗ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ',
    transliteration: 'Innallaha Rabbi wa Rabbukum fa\'buduh; haza Siratum-Mustaqim',
    translation: 'Indeed, Allah is my Lord and your Lord, so worship Him. That is the straight path.',
    audioId: 401,
    theme: 'teachings',
    topics: ['monotheism', 'worship', 'guidance']
  },
  {
    id: 8,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 52,
    arabic: 'فَلَمَّا أَحَسَّ عِيسَىٰ مِنْهُمُ الْكُفْرَ قَالَ مَنْ أَنصَارِي إِلَى اللَّهِ ۖ قَالَ الْحَوَارِيُّونَ نَحْنُ أَنصَارُ اللَّهِ آمَنَّا بِاللَّهِ وَاشْهَدْ بِأَنَّا مُسْلِمُونَ',
    transliteration: 'Falamma ahassa Isa minhumul-kufra qala man ansari ilallah; qalal-Hawariyyuna nahnu ansarullah; amanna billahi wash-had bi-anna muslimun',
    translation: 'But when Jesus felt persistence in disbelief from them, he said, "Who are my supporters for the cause of Allah?" The disciples said, "We are supporters for Allah. We have believed in Allah and testify that we are Muslims."',
    audioId: 402,
    theme: 'disciples',
    topics: ['disciples', 'faith', 'submission']
  },
  {
    id: 9,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 55,
    arabic: 'إِذْ قَالَ اللَّهُ يَا عِيسَىٰ إِنِّي مُتَوَفِّيكَ وَرَافِعُكَ إِلَيَّ وَمُطَهِّرُكَ مِنَ الَّذِينَ كَفَرُوا وَجَاعِلُ الَّذِينَ اتَّبَعُوكَ فَوْقَ الَّذِينَ كَفَرُوا إِلَىٰ يَوْمِ الْقِيَامَةِ ۖ ثُمَّ إِلَيَّ مَرْجِعُكُمْ فَأَحْكُمُ بَيْنَكُمْ فِيمَا كُنتُمْ فِيهِ تَخْتَلِفُونَ',
    transliteration: 'Iz qalallahu ya Isa inni mutawaffika wa rafi\'uka ilayya wa mutahhiruka minal-lazina kafaru wa ja\'ilul-lazinattaba\'uka fawqal-lazina kafaru ila Yawmil-Qiyamah; summa ilayya marji\'ukum fa-ahkumu bainakum fima kuntum fihi takhtalifun',
    translation: 'Mention when Allah said, "O Jesus, indeed I will take you and raise you to Myself and purify you from those who disbelieve and make those who follow you superior to those who disbelieve until the Day of Resurrection. Then to Me is your return, and I will judge between you concerning that in which you used to differ."',
    audioId: 405,
    theme: 'ascension',
    topics: ['raising to Allah', 'purification', 'return']
  },
  {
    id: 10,
    surah: 'Al-Imran',
    surahNumber: 3,
    ayah: 59,
    arabic: 'إِنَّ مَثَلَ عِيسَىٰ عِندَ اللَّهِ كَمَثَلِ آدَمَ ۖ خَلَقَهُ مِن تُرَابٍ ثُمَّ قَالَ لَهُ كُن فَيَكُونُ',
    transliteration: 'Inna masala Isa \'indallahi kamasali Adam; khalaqahu min turabin summa qala lahu kun fayakun',
    translation: 'Indeed, the example of Jesus to Allah is like that of Adam. He created him from dust; then He said to him, "Be," and he was.',
    audioId: 409,
    theme: 'nature',
    topics: ['creation', 'comparison to Adam', 'divine command']
  },
  // Surah An-Nisa (4)
  {
    id: 11,
    surah: 'An-Nisa',
    surahNumber: 4,
    ayah: 157,
    arabic: 'وَقَوْلِهِمْ إِنَّا قَتَلْنَا الْمَسِيحَ عِيسَى ابْنَ مَرْيَمَ رَسُولَ اللَّهِ وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ ۚ وَإِنَّ الَّذِينَ اخْتَلَفُوا فِيهِ لَفِي شَكٍّ مِّنْهُ ۚ مَا لَهُم بِهِ مِنْ عِلْمٍ إِلَّا اتِّبَاعَ الظَّنِّ ۚ وَمَا قَتَلُوهُ يَقِينًا',
    transliteration: 'Wa qawlihim inna qatalnal-Masiha Isa-bna Maryama Rasulallahi wa ma qataluhu wa ma salabuhu wa lakin shubbiha lahum; wa innal-lazinakhtalaflu fihi lafi shakkim-minh; ma lahum bihi min \'ilmin illattiba\'az-zann; wa ma qataluhu yaqina',
    translation: 'And for their saying, "Indeed, we have killed the Messiah, Jesus, the son of Mary, the messenger of Allah." And they did not kill him, nor did they crucify him; but another was made to resemble him to them. And indeed, those who differ over it are in doubt about it. They have no knowledge of it except the following of assumption. And they did not kill him, for certain.',
    audioId: 663,
    theme: 'crucifixion',
    topics: ['not crucified', 'substitution', 'doubt']
  },
  {
    id: 12,
    surah: 'An-Nisa',
    surahNumber: 4,
    ayah: 158,
    arabic: 'بَل رَّفَعَهُ اللَّهُ إِلَيْهِ ۚ وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا',
    transliteration: 'Bal rafa\'ahullahu ilayh; wa kanallahu \'Azizan Hakima',
    translation: 'Rather, Allah raised him to Himself. And ever is Allah Exalted in Might and Wise.',
    audioId: 664,
    theme: 'ascension',
    topics: ['raised to Allah', 'divine wisdom']
  },
  {
    id: 13,
    surah: 'An-Nisa',
    surahNumber: 4,
    ayah: 171,
    arabic: 'يَا أَهْلَ الْكِتَابِ لَا تَغْلُوا فِي دِينِكُمْ وَلَا تَقُولُوا عَلَى اللَّهِ إِلَّا الْحَقَّ ۚ إِنَّمَا الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ رَسُولُ اللَّهِ وَكَلِمَتُهُ أَلْقَاهَا إِلَىٰ مَرْيَمَ وَرُوحٌ مِّنْهُ ۖ فَآمِنُوا بِاللَّهِ وَرُسُلِهِ ۖ وَلَا تَقُولُوا ثَلَاثَةٌ ۚ انتَهُوا خَيْرًا لَّكُمْ ۚ إِنَّمَا اللَّهُ إِلَٰهٌ وَاحِدٌ ۖ سُبْحَانَهُ أَن يَكُونَ لَهُ وَلَدٌ ۘ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ وَكَفَىٰ بِاللَّهِ وَكِيلًا',
    transliteration: 'Ya Ahlal-Kitabi la taghlu fi dinikum wa la taqulu \'alallahi illal-haqq; innamal-Masihu Isa-bnu Maryama Rasulullahi wa Kalimatuhu alqaha ila Maryama wa ruhum-minh; fa-aminu billahi wa Rusulih; wa la taqulu salasah; intahu khairal-lakum; innamallahu Ilahuw-Wahid; Subhanahu ai-yakuna lahu walad; lahu ma fis-samawati wa ma fil-ard; wa kafa billahi Wakila',
    translation: 'O People of the Scripture, do not commit excess in your religion or say about Allah except the truth. The Messiah, Jesus, the son of Mary, was but a messenger of Allah and His word which He directed to Mary and a soul created at a command from Him. So believe in Allah and His messengers. And do not say, "Three"; desist - it is better for you. Indeed, Allah is but one God. Exalted is He above having a son. To Him belongs whatever is in the heavens and whatever is on the earth. And sufficient is Allah as Disposer of affairs.',
    audioId: 677,
    theme: 'nature',
    topics: ['messenger', 'word of Allah', 'monotheism', 'trinity refuted']
  },
  // Surah Al-Maidah (5)
  {
    id: 14,
    surah: 'Al-Maidah',
    surahNumber: 5,
    ayah: 46,
    arabic: 'وَقَفَّيْنَا عَلَىٰ آثَارِهِم بِعِيسَى ابْنِ مَرْيَمَ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرَاةِ ۖ وَآتَيْنَاهُ الْإِنجِيلَ فِيهِ هُدًى وَنُورٌ وَمُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرَاةِ وَهُدًى وَمَوْعِظَةً لِّلْمُتَّقِينَ',
    transliteration: 'Wa qaffaina \'ala asarihim bi-Isa-bni Maryama musaddiqal-lima baina yadaihi minat-Tawrati wa atainahul-Injila fihi hudaw-wa nurunw-wa musaddiqal-lima baina yadaihi minat-Tawrati wa hudaw-wa maw\'izatal-lilmuttaqin',
    translation: 'And We sent, following in their footsteps, Jesus, the son of Mary, confirming that which came before him in the Torah; and We gave him the Gospel, in which was guidance and light and confirming that which preceded it of the Torah as guidance and instruction for the righteous.',
    audioId: 756,
    theme: 'scripture',
    topics: ['Gospel', 'confirming Torah', 'guidance']
  },
  {
    id: 15,
    surah: 'Al-Maidah',
    surahNumber: 5,
    ayah: 72,
    arabic: 'لَقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ ۖ وَقَالَ الْمَسِيحُ يَا بَنِي إِسْرَائِيلَ اعْبُدُوا اللَّهَ رَبِّي وَرَبَّكُمْ ۖ إِنَّهُ مَن يُشْرِكْ بِاللَّهِ فَقَدْ حَرَّمَ اللَّهُ عَلَيْهِ الْجَنَّةَ وَمَأْوَاهُ النَّارُ ۖ وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ',
    transliteration: 'Laqad kafaral-lazina qalu innallaha huwal-Masihu-bnu Maryam; wa qalal-Masihu ya Bani Israila\'budullaha Rabbi wa Rabbakum; innahu mai-yushrik billahi faqad harramallahu \'alaihil-Jannata wa ma\'wahun-Nar; wa ma liz-zalimina min ansar',
    translation: 'They have certainly disbelieved who say, "Allah is the Messiah, the son of Mary" while the Messiah has said, "O Children of Israel, worship Allah, my Lord and your Lord." Indeed, he who associates others with Allah - Allah has forbidden him Paradise, and his refuge is the Fire. And there are not for the wrongdoers any helpers.',
    audioId: 782,
    theme: 'teachings',
    topics: ['monotheism', 'worship Allah', 'shirk']
  },
  {
    id: 16,
    surah: 'Al-Maidah',
    surahNumber: 5,
    ayah: 75,
    arabic: 'مَّا الْمَسِيحُ ابْنُ مَرْيَمَ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ وَأُمُّهُ صِدِّيقَةٌ ۖ كَانَا يَأْكُلَانِ الطَّعَامَ ۗ انظُرْ كَيْفَ نُبَيِّنُ لَهُمُ الْآيَاتِ ثُمَّ انظُرْ أَنَّىٰ يُؤْفَكُونَ',
    transliteration: 'Mal-Masihu-bnu Maryama illa Rasulun qad khalat min qablihir-Rusulu wa ummuhu Siddiqah; kana ya\'kulanit-ta\'am; unzur kaifa nubayyinu lahumul-Ayati summanuzr anna yu\'fakun',
    translation: 'The Messiah, son of Mary, was not but a messenger; other messengers have passed on before him. And his mother was a supporter of truth. They both used to eat food. Look how We make clear to them the signs; then look how they are deluded.',
    audioId: 785,
    theme: 'nature',
    topics: ['human messenger', 'ate food', 'Mary truthful']
  },
  {
    id: 17,
    surah: 'Al-Maidah',
    surahNumber: 5,
    ayah: 110,
    arabic: 'إِذْ قَالَ اللَّهُ يَا عِيسَى ابْنَ مَرْيَمَ اذْكُرْ نِعْمَتِي عَلَيْكَ وَعَلَىٰ وَالِدَتِكَ إِذْ أَيَّدتُّكَ بِرُوحِ الْقُدُسِ تُكَلِّمُ النَّاسَ فِي الْمَهْدِ وَكَهْلًا ۖ وَإِذْ عَلَّمْتُكَ الْكِتَابَ وَالْحِكْمَةَ وَالتَّوْرَاةَ وَالْإِنجِيلَ ۖ وَإِذْ تَخْلُقُ مِنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ بِإِذْنِي فَتَنفُخُ فِيهَا فَتَكُونُ طَيْرًا بِإِذْنِي ۖ وَتُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ بِإِذْنِي ۖ وَإِذْ تُخْرِجُ الْمَوْتَىٰ بِإِذْنِي',
    transliteration: 'Iz qalallahu ya Isa-bna Maryamaz-kur ni\'mati \'alaika wa \'ala walidatika iz ayyadtuka bi-Ruhil-Qudusi tukallimun-nasa fil-mahdi wa kahla; wa iz \'allamtukal-Kitaba wal-Hikmata wat-Tawrata wal-Injil; wa iz takhluqu minat-tini kahay\'atit-tayri bi-izni fatanfukhu fiha fatakunu tayram-bi-izni wa tubri\'ul-akmaha wal-abrasa bi-izni; wa iz tukhrijul-mawta bi-izni',
    translation: 'Mention when Allah will say, "O Jesus, Son of Mary, remember My favor upon you and upon your mother when I supported you with the Pure Spirit and you spoke to the people in the cradle and in maturity; and when I taught you writing and wisdom and the Torah and the Gospel; and when you designed from clay what was like the form of a bird with My permission, then you breathed into it, and it became a bird with My permission; and you healed the blind and the leper with My permission; and when you brought forth the dead with My permission."',
    audioId: 820,
    theme: 'miracles',
    topics: ['Holy Spirit', 'miracles', 'speaking in cradle', 'raising dead']
  },
  {
    id: 18,
    surah: 'Al-Maidah',
    surahNumber: 5,
    ayah: 112,
    arabic: 'إِذْ قَالَ الْحَوَارِيُّونَ يَا عِيسَى ابْنَ مَرْيَمَ هَلْ يَسْتَطِيعُ رَبُّكَ أَن يُنَزِّلَ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ ۖ قَالَ اتَّقُوا اللَّهَ إِن كُنتُم مُّؤْمِنِينَ',
    transliteration: 'Iz qalal-Hawariyyuna ya Isa-bna Maryama hal yastati\'u Rabbuka ai-yunazzila \'alaina ma\'idatam-minas-sama\'; qalattaqullaha in kuntum mu\'minin',
    translation: 'Mention when the disciples said, "O Jesus, Son of Mary, can your Lord send down to us a table spread with food from the heaven?" Jesus said, "Fear Allah, if you should be believers."',
    audioId: 822,
    theme: 'miracles',
    topics: ['table from heaven', 'disciples', 'faith']
  },
  {
    id: 19,
    surah: 'Al-Maidah',
    surahNumber: 5,
    ayah: 116,
    arabic: 'وَإِذْ قَالَ اللَّهُ يَا عِيسَى ابْنَ مَرْيَمَ أَأَنتَ قُلْتَ لِلنَّاسِ اتَّخِذُونِي وَأُمِّيَ إِلَٰهَيْنِ مِن دُونِ اللَّهِ ۖ قَالَ سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ ۚ إِن كُنتُ قُلْتُهُ فَقَدْ عَلِمْتَهُ ۚ تَعْلَمُ مَا فِي نَفْسِي وَلَا أَعْلَمُ مَا فِي نَفْسِكَ ۚ إِنَّكَ أَنتَ عَلَّامُ الْغُيُوبِ',
    transliteration: 'Wa iz qalallahu ya Isa-bna Maryama a-anta qulta linnasit-takhizuni wa ummiya ilahayni min dunillah; qala Subhanaka ma yakunu li an aqula ma laisa li bihaqq; in kuntu qultuhu faqad \'alimtah; ta\'lamu ma fi nafsi wa la a\'lamu ma fi nafsik; innaka Anta \'Allamul-Ghuyub',
    translation: 'And mention when Allah will say, "O Jesus, Son of Mary, did you say to the people, \'Take me and my mother as deities besides Allah?"\' He will say, "Exalted are You! It was not for me to say that to which I have no right. If I had said it, You would have known it. You know what is within myself, and I do not know what is within Yourself. Indeed, it is You who is Knower of the unseen."',
    audioId: 826,
    theme: 'teachings',
    topics: ['rejecting worship', 'monotheism', 'Day of Judgment']
  },
  {
    id: 20,
    surah: 'Al-Maidah',
    surahNumber: 5,
    ayah: 117,
    arabic: 'مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ أَنِ اعْبُدُوا اللَّهَ رَبِّي وَرَبَّكُمْ ۚ وَكُنتُ عَلَيْهِمْ شَهِيدًا مَّا دُمْتُ فِيهِمْ ۖ فَلَمَّا تَوَفَّيْتَنِي كُنتَ أَنتَ الرَّقِيبَ عَلَيْهِمْ ۚ وَأَنتَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ',
    transliteration: 'Ma qultu lahum illa ma amartani bihi ani\'budullaha Rabbi wa Rabbakum; wa kuntu \'alaihim shahidam-ma dumtu fihim falamma tawaffaitani kunta Antar-Raqiba \'alaihim; wa Anta \'ala kulli shai\'in Shahid',
    translation: 'I said not to them except what You commanded me - to worship Allah, my Lord and your Lord. And I was a witness over them as long as I was among them; but when You took me up, You were the Observer over them, and You are, over all things, Witness.',
    audioId: 827,
    theme: 'teachings',
    topics: ['obeying Allah', 'witness', 'worship']
  },
  // Surah Maryam (19)
  {
    id: 21,
    surah: 'Maryam',
    surahNumber: 19,
    ayah: 16,
    arabic: 'وَاذْكُرْ فِي الْكِتَابِ مَرْيَمَ إِذِ انتَبَذَتْ مِنْ أَهْلِهَا مَكَانًا شَرْقِيًّا',
    transliteration: 'Wazkur fil-Kitabi Maryama izin-tabazat min ahliha makanan sharqiyya',
    translation: 'And mention in the Book the story of Mary, when she withdrew from her family to a place toward the east.',
    audioId: 2121,
    theme: 'birth',
    topics: ['Mary', 'seclusion']
  },
  {
    id: 22,
    surah: 'Maryam',
    surahNumber: 19,
    ayah: 19,
    arabic: 'قَالَ إِنَّمَا أَنَا رَسُولُ رَبِّكِ لِأَهَبَ لَكِ غُلَامًا زَكِيًّا',
    transliteration: 'Qala innama ana Rasulu Rabbiki li-ahaba laki ghulaman zakiyya',
    translation: 'He said, "I am only the messenger of your Lord to give you news of a pure boy."',
    audioId: 2124,
    theme: 'birth',
    topics: ['Gabriel', 'annunciation', 'pure son']
  },
  {
    id: 23,
    surah: 'Maryam',
    surahNumber: 19,
    ayah: 30,
    arabic: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',
    transliteration: 'Qala inni \'Abdullahi ataniyal-Kitaba wa ja\'alani Nabiyya',
    translation: 'Jesus said, "Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet."',
    audioId: 2135,
    theme: 'nature',
    topics: ['servant of Allah', 'prophet', 'scripture']
  },
  {
    id: 24,
    surah: 'Maryam',
    surahNumber: 19,
    ayah: 31,
    arabic: 'وَجَعَلَنِي مُبَارَكًا أَيْنَ مَا كُنتُ وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا',
    transliteration: 'Wa ja\'alani mubarakan ayna ma kuntu wa awsani bis-Salati waz-Zakati ma dumtu hayya',
    translation: 'And He has made me blessed wherever I am and has enjoined upon me prayer and zakah as long as I remain alive.',
    audioId: 2136,
    theme: 'teachings',
    topics: ['blessed', 'prayer', 'charity']
  },
  {
    id: 25,
    surah: 'Maryam',
    surahNumber: 19,
    ayah: 32,
    arabic: 'وَبَرًّا بِوَالِدَتِي وَلَمْ يَجْعَلْنِي جَبَّارًا شَقِيًّا',
    transliteration: 'Wa barram-bi-walidati wa lam yaj\'alni jabbaran shaqiyya',
    translation: 'And made me dutiful to my mother, and He has not made me a wretched tyrant.',
    audioId: 2137,
    theme: 'character',
    topics: ['dutiful to mother', 'humble', 'character']
  },
  {
    id: 26,
    surah: 'Maryam',
    surahNumber: 19,
    ayah: 33,
    arabic: 'وَالسَّلَامُ عَلَيَّ يَوْمَ وُلِدتُّ وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا',
    transliteration: 'Was-Salamu \'alayya yawma wulidtu wa yawma amutu wa yawma ub\'asu hayya',
    translation: 'And peace is on me the day I was born and the day I will die and the day I am raised alive.',
    audioId: 2138,
    theme: 'blessing',
    topics: ['peace', 'birth', 'death', 'resurrection']
  },
  // Surah Az-Zukhruf (43)
  {
    id: 27,
    surah: 'Az-Zukhruf',
    surahNumber: 43,
    ayah: 61,
    arabic: 'وَإِنَّهُ لَعِلْمٌ لِّلسَّاعَةِ فَلَا تَمْتَرُنَّ بِهَا وَاتَّبِعُونِ ۚ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ',
    transliteration: 'Wa innahu la\'ilmul-lis-Sa\'ati fala tamtarunna biha wattabi\'un; haza Siratum-Mustaqim',
    translation: 'And indeed, Jesus will be knowledge of the Hour, so be not in doubt of it, and follow Me. This is a straight path.',
    audioId: 4362,
    theme: 'second_coming',
    topics: ['sign of Hour', 'second coming', 'guidance']
  },
  {
    id: 28,
    surah: 'Az-Zukhruf',
    surahNumber: 43,
    ayah: 63,
    arabic: 'وَلَمَّا جَاءَ عِيسَىٰ بِالْبَيِّنَاتِ قَالَ قَدْ جِئْتُكُم بِالْحِكْمَةِ وَلِأُبَيِّنَ لَكُم بَعْضَ الَّذِي تَخْتَلِفُونَ فِيهِ ۖ فَاتَّقُوا اللَّهَ وَأَطِيعُونِ',
    transliteration: 'Wa lamma ja\'a Isa bil-bayyinati qala qad ji\'tukum bil-Hikmati wa li-ubayyina lakum ba\'dal-lazi takhtalifuna fih; fattaqullaha wa ati\'un',
    translation: 'And when Jesus brought clear proofs, he said, "I have come to you with wisdom and to make clear to you some of that over which you differ, so fear Allah and obey me."',
    audioId: 4364,
    theme: 'mission',
    topics: ['wisdom', 'clarification', 'obedience']
  },
  // Surah As-Saff (61)
  {
    id: 29,
    surah: 'As-Saff',
    surahNumber: 61,
    ayah: 6,
    arabic: 'وَإِذْ قَالَ عِيسَى ابْنُ مَرْيَمَ يَا بَنِي إِسْرَائِيلَ إِنِّي رَسُولُ اللَّهِ إِلَيْكُم مُّصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِن بَعْدِي اسْمُهُ أَحْمَدُ ۖ فَلَمَّا جَاءَهُم بِالْبَيِّنَاتِ قَالُوا هَٰذَا سِحْرٌ مُّبِينٌ',
    transliteration: 'Wa iz qala Isa-bnu Maryama ya Bani Israila inni Rasulullahi ilaikum musaddiqal-lima baina yadayya minat-Tawrati wa mubashshiram-bi-Rasuliy-ya\'ti mim ba\'dis-muhu Ahmad; falamma ja\'ahum bil-bayyinati qalu haza sihrum-mubin',
    translation: 'And mention when Jesus, the son of Mary, said, "O children of Israel, indeed I am the messenger of Allah to you confirming what came before me of the Torah and bringing good tidings of a messenger to come after me, whose name is Ahmad." But when he came to them with clear evidences, they said, "This is obvious magic."',
    audioId: 5439,
    theme: 'mission',
    topics: ['prophecy of Muhammad', 'confirming Torah', 'messenger']
  },
  {
    id: 30,
    surah: 'As-Saff',
    surahNumber: 61,
    ayah: 14,
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا أَنصَارَ اللَّهِ كَمَا قَالَ عِيسَى ابْنُ مَرْيَمَ لِلْحَوَارِيِّينَ مَنْ أَنصَارِي إِلَى اللَّهِ ۖ قَالَ الْحَوَارِيُّونَ نَحْنُ أَنصَارُ اللَّهِ',
    transliteration: 'Ya ayyuhal-lazina amanu kunu ansarallahi kama qala Isa-bnu Maryama lil-Hawariyyina man ansari ilallah; qalal-Hawariyyuna nahnu ansarullah',
    translation: 'O you who have believed, be supporters of Allah, as when Jesus, the son of Mary, said to the disciples, "Who are my supporters for Allah?" The disciples said, "We are supporters of Allah."',
    audioId: 5447,
    theme: 'disciples',
    topics: ['disciples', 'supporters of Allah', 'faith']
  }
];

// Hadith about Jesus
export const hadithCollection = [
  {
    id: 1,
    narrator: 'Abu Hurairah',
    source: 'Sahih al-Bukhari',
    hadithNumber: '3448',
    arabic: 'وَالَّذِي نَفْسِي بِيَدِهِ، لَيُوشِكَنَّ أَنْ يَنْزِلَ فِيكُمُ ابْنُ مَرْيَمَ حَكَمًا عَدْلاً، فَيَكْسِرَ الصَّلِيبَ، وَيَقْتُلَ الْخِنْزِيرَ، وَيَضَعَ الْجِزْيَةَ',
    translation: 'By Him in Whose Hand is my soul, the son of Mary will soon descend among you as a just judge. He will break the cross, kill the swine, and abolish the Jizyah.',
    topic: 'second_coming',
    themes: ['return of Jesus', 'justice', 'end times']
  },
  {
    id: 2,
    narrator: 'Abu Hurairah',
    source: 'Sahih Muslim',
    hadithNumber: '155',
    arabic: 'لَيْسَ بَيْنِي وَبَيْنَهُ نَبِيٌّ يَعْنِي عِيسَى وَإِنَّهُ نَازِلٌ',
    translation: 'There is no prophet between me and him (Jesus), and he will descend.',
    topic: 'second_coming',
    themes: ['no prophet between', 'descent']
  },
  {
    id: 3,
    narrator: 'Abu Hurairah',
    source: 'Sahih al-Bukhari',
    hadithNumber: '3443',
    arabic: 'أَنَا أَوْلَى النَّاسِ بِعِيسَى ابْنِ مَرْيَمَ فِي الأُولَى وَالآخِرَةِ',
    translation: 'I am the closest of people to Jesus son of Mary in this world and the Hereafter.',
    topic: 'relationship',
    themes: ['closeness to Muhammad', 'brotherhood of prophets']
  },
  {
    id: 4,
    narrator: 'Abu Hurairah',
    source: 'Sahih al-Bukhari',
    hadithNumber: '3442',
    arabic: 'الْأَنْبِيَاءُ إِخْوَةٌ مِنْ عَلاَّتٍ، وَأُمَّهَاتُهُمْ شَتَّى، وَدِينُهُمْ وَاحِدٌ',
    translation: 'The prophets are brothers from one father with different mothers, and their religion is one.',
    topic: 'prophethood',
    themes: ['brotherhood of prophets', 'one religion']
  },
  {
    id: 5,
    narrator: 'Jabir ibn Abdullah',
    source: 'Sahih Muslim',
    hadithNumber: '156',
    arabic: 'فَيَنْزِلُ عِيسَى ابْنُ مَرْيَمَ فَيَقُولُ أَمِيرُهُمْ تَعَالَ صَلِّ لَنَا فَيَقُولُ لاَ إِنَّ بَعْضَكُمْ عَلَى بَعْضٍ أُمَرَاءُ',
    translation: 'Jesus son of Mary will descend and their leader will say: "Come and lead us in prayer." But he will say: "No, some of you are leaders over others, as an honor from Allah to this Ummah."',
    topic: 'second_coming',
    themes: ['humility', 'honor to Ummah', 'prayer']
  },
  {
    id: 6,
    narrator: 'An-Nawwas ibn Sam\'an',
    source: 'Sahih Muslim',
    hadithNumber: '2937',
    arabic: 'فَبَيْنَمَا هُوَ كَذَلِكَ إِذْ بَعَثَ اللَّهُ الْمَسِيحَ ابْنَ مَرْيَمَ فَيَنْزِلُ عِنْدَ الْمَنَارَةِ الْبَيْضَاءِ شَرْقِيَّ دِمَشْقَ',
    translation: 'Then Allah will send the Messiah, son of Mary, and he will descend at the white minaret in the eastern side of Damascus.',
    topic: 'second_coming',
    themes: ['Damascus', 'location of descent', 'end times']
  },
  {
    id: 7,
    narrator: 'Abu Hurairah',
    source: 'Sahih al-Bukhari',
    hadithNumber: '3449',
    arabic: 'كَيْفَ أَنْتُمْ إِذَا نَزَلَ ابْنُ مَرْيَمَ فِيكُمْ وَإِمَامُكُمْ مِنْكُمْ',
    translation: 'What will be your state when the son of Mary descends amongst you and your Imam is from among you?',
    topic: 'second_coming',
    themes: ['Muslim leadership', 'return']
  },
  {
    id: 8,
    narrator: 'Abu Hurairah',
    source: 'Sahih Muslim',
    hadithNumber: '2365',
    arabic: 'رَأَيْتُ عِيسَى ابْنَ مَرْيَمَ وَمُوسَى وَإِبْرَاهِيمَ، فَأَمَّا عِيسَى فَأَحْمَرُ جَعْدٌ عَرِيضُ الصَّدْرِ',
    translation: 'I saw Jesus, Moses, and Abraham. As for Jesus, he was of red complexion, had curly hair, and was broad-chested.',
    topic: 'description',
    themes: ['physical appearance', 'night journey']
  }
];

// Stories of Jesus
export const storiesOfIsa = [
  {
    id: 1,
    title: 'The Miraculous Birth',
    arabicTitle: 'الولادة المعجزة',
    summary: 'The story of how Jesus was born to the Virgin Mary through divine miracle.',
    content: `Angel Jibril (Gabriel) appeared to Maryam (Mary) while she was in seclusion. He announced that Allah would grant her a pure son. When she questioned how this could be possible since no man had touched her, the angel explained that for Allah, creating something is as simple as saying "Be" and it is.

Maryam withdrew to a remote place when the time of birth came. The pains of childbirth drove her to the trunk of a palm tree. In her distress, she wished she had died before this. A voice called out to her not to grieve, for Allah had provided a stream beneath her, and she should shake the palm tree to drop fresh dates upon her.

When she returned to her people carrying the baby, they accused her of doing something terrible. She pointed to the baby, and miraculously, Jesus spoke from the cradle, declaring himself a servant of Allah, a prophet given the Scripture, blessed wherever he may be, and enjoined to prayer and charity.`,
    relatedVerses: [21, 22, 23, 24, 25, 26],
    themes: ['virgin birth', 'miracle', 'prophecy']
  },
  {
    id: 2,
    title: 'The Miracles of Jesus',
    arabicTitle: 'معجزات عيسى',
    summary: 'The extraordinary miracles performed by Jesus with the permission of Allah.',
    content: `By the permission of Allah, Jesus performed many miracles to prove his prophethood to the Children of Israel:

1. **Speaking in the Cradle**: Jesus spoke as an infant, declaring his prophethood and defending his mother's honor.

2. **Creating Birds from Clay**: He would fashion the shape of a bird from clay, breathe into it, and it would become a living bird by Allah's permission.

3. **Healing the Blind**: He restored sight to those born blind.

4. **Curing Leprosy**: He healed those afflicted with leprosy.

5. **Raising the Dead**: By Allah's permission, he brought the dead back to life.

6. **Knowledge of the Unseen**: He would inform people what they had eaten and what they had stored in their homes.

7. **The Table from Heaven**: When his disciples asked for a table spread with food from heaven as a sign, Allah sent down such a table.

All these miracles were performed "bi-iznillah" (by Allah's permission), emphasizing that the power belonged to Allah alone.`,
    relatedVerses: [5, 17],
    themes: ['miracles', 'divine permission', 'signs']
  },
  {
    id: 3,
    title: 'The Disciples (Al-Hawariyyun)',
    arabicTitle: 'الحواريون',
    summary: 'The faithful companions who supported Jesus in his mission.',
    content: `When Jesus sensed disbelief from his people, he called out asking who would be his supporters for the cause of Allah. The disciples (Al-Hawariyyun) responded, declaring themselves supporters of Allah, believers in Him, and witnesses that they were Muslims (submitters to Allah).

The disciples requested a table spread with food from heaven as a festival for the first and last of them and as a sign from Allah. Jesus prayed for this, and Allah granted their request, warning that whoever disbelieved after this would face a severe punishment.

The Quran calls upon believers to be supporters of Allah, just as the disciples supported Jesus. This shows the importance of standing firm in faith and supporting the message of Allah.`,
    relatedVerses: [8, 18, 30],
    themes: ['faith', 'discipleship', 'support']
  },
  {
    id: 4,
    title: 'The Raising of Jesus',
    arabicTitle: 'رفع عيسى',
    summary: 'How Allah saved Jesus from his enemies and raised him to heaven.',
    content: `The Quran clearly states that Jesus was neither killed nor crucified, though it was made to appear so to his enemies. Allah raised Jesus to Himself, saving him from those who plotted against him.

This event demonstrates Allah's power to protect His messengers and His plan that transcends human plotting. Jesus remains alive in the heavens and will return before the Day of Judgment.

When Allah addressed Jesus, He said: "O Jesus, indeed I will take you and raise you to Myself and purify you from those who disbelieve and make those who follow you superior to those who disbelieve until the Day of Resurrection."

This raising is a source of honor for Jesus and proof of his special status among the prophets.`,
    relatedVerses: [9, 11, 12],
    themes: ['ascension', 'divine protection', 'salvation']
  },
  {
    id: 5,
    title: 'Jesus and the Torah',
    arabicTitle: 'عيسى والتوراة',
    summary: 'Jesus came to confirm the Torah and make lawful some things that were forbidden.',
    content: `Jesus was sent as a messenger to the Children of Israel, confirming the Torah that came before him. However, his mission also included making lawful some things that had been forbidden to them.

He was given the Gospel (Injil), which contained guidance and light, confirming the Torah and serving as guidance and instruction for the righteous.

Jesus taught his followers to worship Allah alone, his Lord and their Lord. He clarified that Allah is One God and that this is the straight path. His message was consistent with all previous prophets - pure monotheism and submission to Allah.`,
    relatedVerses: [6, 14, 15],
    themes: ['Torah', 'Gospel', 'monotheism']
  }
];

// Information about Mary (Maryam)
export const maryamInfo = {
  title: 'Maryam (Mary)',
  arabicName: 'مريم',
  description: 'Mary, the mother of Jesus, holds a special and honored position in Islam. She is the only woman mentioned by name in the Quran, and an entire chapter (Surah 19) is named after her.',
  titles: [
    { title: 'As-Siddiqah', meaning: 'The Truthful One', arabic: 'الصديقة' },
    { title: 'Al-Batul', meaning: 'The Pure/Virgin', arabic: 'البتول' },
    { title: 'Khair Nisa al-Alamin', meaning: 'Best Woman of All Worlds', arabic: 'خير نساء العالمين' }
  ],
  keyPoints: [
    'Chosen and purified above all women of her time',
    'Dedicated to the service of Allah from birth',
    'Received provision miraculously in the temple',
    'Given the glad tidings of Jesus by Angel Gabriel',
    'Gave birth to Jesus as a virgin',
    'Defended by her infant son who spoke from the cradle',
    'Described as a "supporter of truth" (Siddiqah)'
  ],
  relatedVerses: [
    { surah: 'Al-Imran', ayah: '42', text: 'And mention when the angels said, "O Mary, indeed Allah has chosen you and purified you and chosen you above the women of the worlds."' },
    { surah: 'At-Tahrim', ayah: '12', text: 'And Mary, the daughter of Imran, who guarded her chastity, so We blew into her garment through Our angel, and she believed in the words of her Lord and His scriptures and was of the devoutly obedient.' }
  ]
};

// Second Coming information
export const secondComingInfo = {
  title: 'The Return of Jesus',
  arabicTitle: 'نزول عيسى',
  description: 'Muslims believe that Jesus will return to earth before the Day of Judgment. This is a major sign of the Hour.',
  keyBeliefs: [
    {
      title: 'Descent from Heaven',
      description: 'Jesus will descend at the white minaret in the eastern side of Damascus, Syria.'
    },
    {
      title: 'A Just Judge',
      description: 'He will judge between people with justice according to Islamic law.'
    },
    {
      title: 'Breaking the Cross',
      description: 'He will break the cross, symbolizing the end of false beliefs about him.'
    },
    {
      title: 'Killing the Swine',
      description: 'He will abolish the consumption of swine.'
    },
    {
      title: 'Abolishing Jizyah',
      description: 'He will abolish the Jizyah (tax on non-Muslims) as all will accept Islam.'
    },
    {
      title: 'Defeating the Dajjal',
      description: 'He will kill the Dajjal (Antichrist) at the gate of Ludd in Palestine.'
    },
    {
      title: 'Peace and Prosperity',
      description: 'His time will be marked by unprecedented peace and prosperity.'
    },
    {
      title: 'Death and Burial',
      description: 'He will eventually die a natural death and be buried next to Prophet Muhammad in Medina.'
    }
  ],
  quranicEvidence: [27],
  hadithEvidence: [1, 2, 5, 6, 7]
};

// Comparative beliefs
export const comparativeBeliefs = [
  {
    topic: 'Nature of Jesus',
    islamicBelief: 'Jesus is a human prophet and messenger of Allah, born miraculously without a father.',
    christianBelief: 'Jesus is the Son of God, divine, the second person of the Trinity.',
    quranicReference: 'Al-Maidah 5:75'
  },
  {
    topic: 'Virgin Birth',
    islamicBelief: 'Affirmed - Mary conceived Jesus miraculously by the command of Allah.',
    christianBelief: 'Affirmed - Mary conceived Jesus through the Holy Spirit.',
    quranicReference: 'Al-Imran 3:47'
  },
  {
    topic: 'Miracles',
    islamicBelief: 'Jesus performed miracles by the permission of Allah as signs of his prophethood.',
    christianBelief: 'Jesus performed miracles through his divine power.',
    quranicReference: 'Al-Maidah 5:110'
  },
  {
    topic: 'Crucifixion',
    islamicBelief: 'Jesus was not crucified; it was made to appear so. Allah raised him to heaven.',
    christianBelief: 'Jesus was crucified, died, and rose again on the third day.',
    quranicReference: 'An-Nisa 4:157-158'
  },
  {
    topic: 'Divinity',
    islamicBelief: 'Jesus is not divine. He is a servant and messenger of Allah.',
    christianBelief: 'Jesus is fully God and fully man.',
    quranicReference: 'Al-Maidah 5:72'
  },
  {
    topic: 'Trinity',
    islamicBelief: 'Rejected - Allah is One, without partners. The Trinity is considered shirk (polytheism).',
    christianBelief: 'God exists as three persons: Father, Son, and Holy Spirit.',
    quranicReference: 'An-Nisa 4:171'
  },
  {
    topic: 'Second Coming',
    islamicBelief: 'Affirmed - Jesus will return before the Day of Judgment.',
    christianBelief: 'Affirmed - Jesus will return in glory.',
    quranicReference: 'Az-Zukhruf 43:61'
  },
  {
    topic: 'Title: Messiah',
    islamicBelief: 'Affirmed - Jesus is Al-Masih (the Messiah), a title given by Allah.',
    christianBelief: 'Affirmed - Jesus is the Christ (Messiah), the anointed one.',
    quranicReference: 'Al-Imran 3:45'
  },
  {
    topic: 'Gospel',
    islamicBelief: 'The Injil was a revelation given to Jesus, now believed to be altered.',
    christianBelief: 'The four Gospels are inspired accounts of Jesus\'s life and teachings.',
    quranicReference: 'Al-Maidah 5:46'
  },
  {
    topic: 'Mary',
    islamicBelief: 'Mary is highly honored, chosen above all women, but not divine or to be worshipped.',
    christianBelief: 'Mary is honored as the Mother of God (Theotokos), venerated in Catholic/Orthodox traditions.',
    quranicReference: 'Al-Imran 3:42'
  }
];

// Pagan Influences in Christianity
export const paganInfluences = {
  title: 'Pagan Influences in Christianity',
  arabicTitle: 'التأثيرات الوثنية في المسيحية',
  introduction: 'Many scholars and historians have noted similarities between certain Christian doctrines and practices with pre-existing pagan religions. These parallels raise important questions about the origins of beliefs that differ from the pure monotheism taught by Jesus.',
  categories: [
    {
      id: 1,
      title: 'The Trinity Doctrine',
      content: 'The concept of a triune god was foreign to early Jewish Christians and Jesus himself. Similar trinities existed in ancient religions: Egyptian (Osiris, Isis, Horus), Hindu (Brahma, Vishnu, Shiva), and Babylonian (Anu, Enlil, Ea). The Trinity was not formally defined until the Council of Nicaea (325 CE) and Council of Constantinople (381 CE), centuries after Jesus.',
      sources: ['Council of Nicaea records', 'Early Church history'],
      paganParallels: ['Egyptian Triad', 'Hindu Trimurti', 'Babylonian Triad']
    },
    {
      id: 2,
      title: 'December 25th - Christmas',
      content: 'Jesus\' birth date is unknown in the Bible. December 25th was chosen to coincide with existing pagan festivals: the Roman Saturnalia, the birthday of the sun god Sol Invictus, and the Persian Mithra\'s birthday. Early Christians did not celebrate Christmas; it was instituted centuries later.',
      sources: ['Catholic Encyclopedia', 'Historical records'],
      paganParallels: ['Saturnalia (Rome)', 'Sol Invictus birthday', 'Mithras birthday']
    },
    {
      id: 3,
      title: 'Easter and Its Symbols',
      content: 'The name "Easter" derives from Eostre/Ishtar, a pagan goddess of spring and fertility. Eggs and rabbits are ancient fertility symbols with no connection to Jesus\' teachings. The timing coincides with spring equinox celebrations common in pagan religions.',
      sources: ['Venerable Bede\'s writings', 'Historical etymology'],
      paganParallels: ['Eostre/Ostara festival', 'Ishtar worship', 'Spring equinox celebrations']
    },
    {
      id: 4,
      title: 'Virgin Birth in Pagan Myths',
      content: 'While Islam affirms the miraculous virgin birth of Jesus, many pagan religions had similar narratives: Perseus (born of Danae and Zeus), Dionysus, Mithras, and Horus were all claimed to have miraculous births. The key difference is Islam presents it as a miracle of the One God, not involving divine-human union.',
      sources: ['Greek mythology', 'Comparative religion studies'],
      paganParallels: ['Perseus', 'Dionysus', 'Mithras', 'Horus']
    },
    {
      id: 5,
      title: 'The Cross Symbol',
      content: 'The cross was a pagan symbol long before Christianity. It was used in ancient Egypt (Ankh), Babylon, India, and other cultures. Early Christians used the fish symbol (Ichthys), not the cross. The cross became prominent only after Constantine in the 4th century.',
      sources: ['Archaeological evidence', 'Early Christian art'],
      paganParallels: ['Egyptian Ankh', 'Tau cross', 'Various sun symbols']
    },
    {
      id: 6,
      title: 'Sunday Worship',
      content: 'Jesus and his disciples observed the Sabbath (Saturday). Sunday worship was adopted to align with the Roman "Day of the Sun" (dies Solis). Constantine officially made Sunday a day of rest in 321 CE, merging Christian practice with sun worship traditions.',
      sources: ['Constantine\'s decree 321 CE', 'Biblical Sabbath references'],
      paganParallels: ['Roman Sun worship', 'Mithraism']
    },
    {
      id: 7,
      title: 'The Concept of Divine Sonship',
      content: 'Many pagan rulers and mythological figures were called "Son of God": Egyptian Pharaohs, Roman Emperors, Hercules, and others. In Jewish tradition, "son of God" was a title for righteous people and kings, not literal divine offspring. The literal interpretation came later under Greco-Roman influence.',
      sources: ['Roman imperial cult', 'Jewish terminology studies'],
      paganParallels: ['Pharaohs as sons of Ra', 'Roman Emperor worship', 'Greek demigods']
    },
    {
      id: 8,
      title: 'Dying and Rising Gods',
      content: 'The narrative of a god dying and rising was common in ancient religions: Osiris (Egypt), Tammuz (Babylon), Attis (Phrygia), Adonis (Greece), and Dionysus. These myths predated Christianity and were widespread in the Mediterranean world.',
      sources: ['Comparative mythology', 'James Frazer\'s "The Golden Bough"'],
      paganParallels: ['Osiris', 'Tammuz', 'Attis', 'Adonis', 'Dionysus']
    }
  ],
  conclusion: 'The Quran calls people back to the pure monotheism of all prophets, including Jesus, free from these later additions. As the Quran states: "Say, \'O People of the Scripture, come to a word that is equitable between us and you - that we will not worship except Allah and not associate anything with Him.\'" (3:64)'
};

// Prophecies of Prophet Muhammad and Jesus' Denial of Divinity
export const propheciesAndDenials = {
  title: 'Biblical Prophecies & Jesus\' True Message',
  arabicTitle: 'النبوءات الكتابية ورسالة عيسى الحقيقية',
  introduction: 'The Bible contains prophecies that Muslims believe refer to Prophet Muhammad, and clear statements from Jesus himself that affirm his humanity and servitude to God.',

  prophecies: [
    {
      id: 1,
      title: 'The Prophet Like Moses',
      reference: 'Deuteronomy 18:18',
      text: '"I will raise up for them a prophet like you from among their brothers. And I will put my words in his mouth, and he shall speak to them all that I command him."',
      explanation: 'This prophecy speaks of a prophet "from among their brothers" - the Ishmaelites (Arabs), cousins of the Israelites. Muhammad, like Moses, brought a new law, led his people, and established a nation. Jesus did not bring a new comprehensive law like Moses did.',
      keyPoints: [
        'From "brothers" of Israelites (Ishmaelites/Arabs)',
        'Like Moses - brought comprehensive law',
        'God puts words in his mouth (Quran revelation)',
        'Moses and Muhammad both married, led nations, died natural deaths'
      ]
    },
    {
      id: 2,
      title: 'The Servant from Arabia',
      reference: 'Isaiah 42:1-4, 10-11',
      text: '"Behold my servant, whom I uphold... He will bring forth justice to the nations... Sing to the Lord a new song... Let the desert and its cities lift up their voice, the villages that Kedar inhabits."',
      explanation: 'Kedar was the son of Ishmael (Genesis 25:13), and his descendants settled in Arabia. This prophecy speaks of God\'s servant bringing justice and a "new song" (new scripture) from Arabia - fitting Prophet Muhammad who came from the descendants of Kedar.',
      keyPoints: [
        'Kedar = son of Ishmael = Arabia',
        'New song = new revelation (Quran)',
        'Justice to nations = Islamic law',
        'The servant, not the son'
      ]
    },
    {
      id: 3,
      title: 'The Praised One (Muhammad)',
      reference: 'Song of Solomon 5:16',
      text: '"His mouth is most sweet: yea, he is altogether lovely (Muhammadim). This is my beloved, and this is my friend."',
      explanation: 'In the Hebrew text, the word used is "Muhammadim" (מַחֲמַדִּים) - the same root as Muhammad, meaning "praised one" or "lovely." The "-im" suffix is a Hebrew honorific plural. This is a direct mention of the name Muhammad in the Hebrew Bible.',
      keyPoints: [
        'Hebrew "Muhammadim" = praised one',
        'Same root as Arabic "Muhammad"',
        'Honorific plural in Hebrew',
        'Direct name reference'
      ]
    },
    {
      id: 4,
      title: 'The Rider on Camels',
      reference: 'Isaiah 21:7, 13-17',
      text: '"And he saw a chariot with a pair of horsemen, a chariot of donkeys, and a chariot of camels... The burden upon Arabia... the glory of Kedar shall fail."',
      explanation: 'This prophecy mentions riders on camels associated with Arabia and Kedar (Ishmael\'s descendants). It prophesies a significant event involving Arabia. The "chariot of donkeys" refers to Jesus who rode into Jerusalem on a donkey, while the "chariot of camels" refers to Prophet Muhammad who came from Arabia.',
      keyPoints: [
        'Two riders prophesied',
        'Donkey rider = Jesus',
        'Camel rider from Arabia = Muhammad',
        'Kedar = Arabian descendants of Ishmael'
      ]
    },
    {
      id: 5,
      title: 'The Comforter (Paraclete)',
      reference: 'John 14:16, 16:7-14',
      text: '"And I will ask the Father, and he will give you another Helper (Paraclete), to be with you forever... He will guide you into all truth."',
      explanation: 'The Greek "Paraclete" has been interpreted as the Holy Spirit by Christians. However, the original Greek "Periklutos" (praised one) is equivalent to "Ahmad/Muhammad." The Quran confirms Jesus foretold Ahmad (61:6). The Paraclete is described as someone who will come after Jesus, speak what he hears, and guide into all truth - matching Prophet Muhammad.',
      keyPoints: [
        'Periklutos = Ahmad = Muhammad (praised)',
        'Will come after Jesus departs',
        'Will speak what he hears (revelation)',
        'Will guide into ALL truth',
        'Quran 61:6 confirms this prophecy'
      ]
    },
    {
      id: 6,
      title: 'Baca (Mecca)',
      reference: 'Psalm 84:5-6',
      text: '"Blessed is the man whose strength is in thee; in whose heart are the highways to Zion. Passing through the valley of Baca, they make it a place of springs."',
      explanation: 'Baca is the ancient name for Mecca, as mentioned in Quran 3:96: "Indeed, the first House of worship established for mankind was that at Bakkah (Mecca)." The pilgrimage to the sacred valley and the well of Zamzam align with this prophecy.',
      keyPoints: [
        'Baca = Bakkah = Mecca',
        'Pilgrimage reference',
        'Springs = Zamzam well',
        'Quran 3:96 confirms Bakkah'
      ]
    }
  ],

  jesusDenialOfDivinity: [
    {
      id: 1,
      title: 'Jesus Called God His Father',
      reference: 'John 20:17',
      text: '"I am ascending to my Father and your Father, to my God and your God."',
      explanation: 'Jesus clearly states that God is HIS God, just as God is the God of his disciples. If Jesus were God himself, he would not have a God above him.'
    },
    {
      id: 2,
      title: 'The Father is Greater',
      reference: 'John 14:28',
      text: '"The Father is greater than I."',
      explanation: 'Jesus explicitly states the Father is greater than him, indicating clear hierarchy and distinction, not equality in a Trinity.'
    },
    {
      id: 3,
      title: 'Jesus Denies Being Good',
      reference: 'Mark 10:18',
      text: '"Why do you call me good? No one is good except God alone."',
      explanation: 'When called "good," Jesus redirects the praise to God alone, distinguishing himself from God.'
    },
    {
      id: 4,
      title: 'Limited Knowledge',
      reference: 'Mark 13:32',
      text: '"But concerning that day or that hour, no one knows, not even the angels in heaven, nor the Son, but only the Father."',
      explanation: 'Jesus admits he doesn\'t know the Hour - only the Father knows. An all-knowing God cannot have limited knowledge.'
    },
    {
      id: 5,
      title: 'Jesus Prayed to God',
      reference: 'Matthew 26:39',
      text: '"And going a little farther he fell on his face and prayed, saying, \'My Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will.\'"',
      explanation: 'Jesus prayed to God, prostrating on his face (like Muslims). He submitted his will to God\'s will - the act of a servant, not God himself.'
    },
    {
      id: 6,
      title: 'Sent by God',
      reference: 'John 17:3',
      text: '"And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent."',
      explanation: 'Jesus calls the Father "the ONLY true God" and describes himself as one who was "sent" - a messenger, not God.'
    },
    {
      id: 7,
      title: 'Jesus Did Nothing of Himself',
      reference: 'John 5:30',
      text: '"I can do nothing on my own. As I hear, I judge, and my judgment is just, because I seek not my own will but the will of him who sent me."',
      explanation: 'Jesus states he can do nothing independently - he only does God\'s will. This is the definition of a prophet and servant.'
    },
    {
      id: 8,
      title: 'Worshipping the Father',
      reference: 'John 4:23',
      text: '"But the hour is coming, and is now here, when the true worshippers will worship the Father in spirit and truth."',
      explanation: 'Jesus directs worship to the Father, not to himself. He never instructed people to worship him.'
    }
  ],

  conclusion: 'These biblical passages align perfectly with the Islamic understanding of Jesus as a great prophet who called people to worship the One God. The Quran confirms: "The Messiah, Jesus, the son of Mary, was but a messenger of Allah and His word which He directed to Mary and a soul from Him. So believe in Allah and His messengers. And do not say, \'Three\'; desist - it is better for you. Indeed, Allah is but one God." (4:171)'
};

// End Times - Armageddon, Mahdi, Dajjal (Antichrist)
export const endTimesInfo = {
  title: 'End Times Prophecies',
  arabicTitle: 'أشراط الساعة',
  introduction: 'Both Islam and Christianity have detailed prophecies about the end times. While there are similarities, there are also significant differences in how each faith views the final events before the Day of Judgment.',

  majorSigns: [
    {
      id: 1,
      title: 'The Mahdi (The Guided One)',
      arabicTitle: 'المهدي',
      islamicBelief: {
        description: 'The Mahdi is a righteous leader from the family of Prophet Muhammad who will appear before the end times. He will unite the Muslim world, establish justice, and prepare for the return of Jesus.',
        keyPoints: [
          'Descendant of Prophet Muhammad through Fatimah',
          'His name will be Muhammad ibn Abdullah',
          'Will fill the earth with justice after it was filled with oppression',
          'Will rule for 7, 8, or 9 years before Jesus returns',
          'Will lead Muslims in prayer when Jesus descends',
          'Jesus will pray behind him initially, honoring the Muslim Ummah'
        ],
        hadithEvidence: [
          {
            text: 'The Mahdi is from my progeny, from the descendants of Fatimah.',
            source: 'Sunan Abu Dawud, Ibn Majah'
          },
          {
            text: 'The Mahdi will be from my family, from the descendants of Fatimah. His name will match my name, and his father\'s name will match my father\'s name.',
            source: 'Sunan Abu Dawud'
          },
          {
            text: 'Even if there remains only one day of this world, Allah will lengthen that day until He sends a man from me (my descendants) whose name matches my name.',
            source: 'Sahih al-Tirmidhi'
          }
        ]
      },
      christianBelief: {
        description: 'Christianity does not have an exact equivalent to the Mahdi. Some Christians view the concept of the Mahdi with suspicion, while others see parallels with the false prophet or even draw connections to their own messianic expectations.',
        keyPoints: [
          'No direct equivalent in mainstream Christianity',
          'Some see him as a potential false prophet',
          'Others note similarities to Jewish Messianic expectations',
          'Focus is primarily on Jesus\' direct return'
        ]
      }
    },
    {
      id: 2,
      title: 'The Dajjal (The Antichrist)',
      arabicTitle: 'المسيح الدجال',
      islamicBelief: {
        description: 'The Dajjal (Antichrist) is the greatest trial to face humanity. He will claim to be God and deceive many with his supernatural abilities. He will be one-eyed and the word "Kafir" (disbeliever) will be written on his forehead.',
        keyPoints: [
          'Will emerge between Syria and Iraq',
          'One-eyed (right eye described as a floating grape)',
          '"Kafir" written on his forehead, readable by all believers',
          'Will have powers to create rain, revive the dead (illusions)',
          'Will travel the entire earth except Mecca and Medina',
          'His trial will last 40 days (1 day like a year, 1 like a month, 1 like a week, rest normal)',
          'Will have a paradise and hell - but reversed (his paradise is actually hell)',
          'Will be killed by Jesus at the gate of Ludd (Lod) in Palestine'
        ],
        hadithEvidence: [
          {
            text: 'There will be no tribulation greater than that of the Dajjal from the creation of Adam until the Hour.',
            source: 'Sahih Muslim'
          },
          {
            text: 'The Dajjal is blind in his right eye and his eye looks like a floating grape.',
            source: 'Sahih al-Bukhari'
          },
          {
            text: 'Between the eyes of Dajjal will be written "Kafir" which every believer will read, whether literate or illiterate.',
            source: 'Sahih Muslim'
          }
        ]
      },
      christianBelief: {
        description: 'The Antichrist in Christianity is a figure who opposes Christ and deceives humanity. Different denominations have varying interpretations - some see it as a specific person, others as a system or spirit of opposition to God.',
        keyPoints: [
          'Mentioned in 1 John and Revelation',
          'Will deceive many and oppose Christ',
          'Often associated with the "Beast" of Revelation',
          'Some see the number 666 as his mark',
          'Will establish a one-world government/religion',
          'Will be defeated at Christ\'s return',
          'Some interpret as a system rather than individual'
        ],
        biblicalReferences: [
          '1 John 2:18 - "You have heard that the Antichrist is coming"',
          'Revelation 13:1-18 - The Beast',
          '2 Thessalonians 2:3-4 - Man of lawlessness'
        ]
      }
    },
    {
      id: 3,
      title: 'Return of Jesus (Isa)',
      arabicTitle: 'نزول عيسى عليه السلام',
      islamicBelief: {
        description: 'Jesus will descend from heaven near a white minaret in Damascus. He will kill the Dajjal, break the cross, abolish the jizyah, and establish Islam as the only religion. He will live for 40 years, marry, have children, and die a natural death.',
        keyPoints: [
          'Will descend at the white minaret east of Damascus',
          'Will be wearing saffron-colored garments',
          'Two angels will support him',
          'Water will drip from his head as if he just bathed',
          'Will kill the Dajjal at the gate of Ludd',
          'Will break the cross (end the false belief of crucifixion)',
          'Will kill the swine and abolish jizyah',
          'All People of the Book will believe in him',
          'Will perform Hajj and pray at the Kaaba',
          'Will live 40 years, die, and be buried next to Prophet Muhammad in Medina'
        ],
        hadithEvidence: [
          {
            text: 'By Him in Whose Hand is my soul, the son of Mary will soon descend among you as a just judge.',
            source: 'Sahih al-Bukhari'
          },
          {
            text: 'He will descend at the white minaret in the eastern side of Damascus.',
            source: 'Sahih Muslim'
          }
        ]
      },
      christianBelief: {
        description: 'Jesus will return in glory to judge the living and the dead. He will defeat the Antichrist, establish His kingdom, and reign forever. Most Christians believe He will return as divine, not merely as a prophet.',
        keyPoints: [
          'Will return in clouds with great glory',
          'Every eye will see Him',
          'Will judge all humanity',
          'Will defeat Satan and the Antichrist',
          'Will establish eternal kingdom',
          'Some believe in a 1000-year reign (Millennium)',
          'Returns as God incarnate, not just a prophet'
        ],
        biblicalReferences: [
          'Matthew 24:30 - Coming on clouds with power and glory',
          'Revelation 19:11-16 - The rider on the white horse',
          'Acts 1:11 - Will return the same way He ascended'
        ]
      }
    },
    {
      id: 4,
      title: 'Gog and Magog (Yajuj and Majuj)',
      arabicTitle: 'يأجوج ومأجوج',
      islamicBelief: {
        description: 'Yajuj and Majuj are two destructive tribes held back by a barrier built by Dhul-Qarnayn. Near the end times, they will break through and cause great corruption. They will be so numerous that they will drink up entire lakes.',
        keyPoints: [
          'Currently held behind a barrier of iron and copper',
          'Will break through near the end times',
          'Enormous in number - beyond counting',
          'Will cause massive destruction on earth',
          'Will drink the Sea of Galilee dry',
          'Jesus and believers will seek refuge on Mount Tur',
          'Allah will send worms/insects to kill them',
          'Birds will carry away their bodies',
          'Rain will cleanse the earth'
        ],
        quranicEvidence: 'Until when Yajuj and Majuj are let loose, and they rush down from every elevation. (Quran 21:96)'
      },
      christianBelief: {
        description: 'Gog and Magog appear in Ezekiel and Revelation as enemies of God\'s people who will attack Israel but be destroyed by divine intervention.',
        keyPoints: [
          'Mentioned in Ezekiel 38-39 and Revelation 20',
          'Will attack Israel/God\'s people',
          'Some see as nations from the north',
          'Will be destroyed by God\'s intervention',
          'In Revelation, appear after the Millennium',
          'Fire from heaven consumes them'
        ],
        biblicalReferences: [
          'Ezekiel 38-39 - Prophecy against Gog',
          'Revelation 20:8 - Gog and Magog deceived by Satan'
        ]
      }
    },
    {
      id: 5,
      title: 'The Great Battle (Armageddon / Al-Malhama)',
      arabicTitle: 'الملحمة الكبرى',
      islamicBelief: {
        description: 'The Malhama (great battle) will be a massive war before the appearance of the Dajjal. Muslims will fight alongside the Romans (Christians) against a common enemy, then the Romans will betray and fight the Muslims. This will be the bloodiest battle in history.',
        keyPoints: [
          'Will occur in the region of Syria/Sham',
          'Muslims will initially ally with Romans against common enemy',
          'After victory, a Roman will raise the cross claiming victory for it',
          'A Muslim will break the cross, leading to conflict',
          'The great battle will begin',
          'One-third of Muslim army will flee (not forgiven)',
          'One-third will be martyred (best martyrs)',
          'One-third will be victorious',
          'Constantinople will be conquered by takbir alone',
          'Then the Dajjal will emerge'
        ],
        hadithEvidence: [
          {
            text: 'You will make a peace treaty with the Romans, and together you will fight an enemy behind them.',
            source: 'Sahih Muslim'
          },
          {
            text: 'The Hour will not come until the Romans land at al-A\'maq or Dabiq.',
            source: 'Sahih Muslim'
          }
        ]
      },
      christianBelief: {
        description: 'Armageddon is the final battle between good and evil at the end of the world. It takes its name from Megiddo in Israel. Christ will return and defeat the forces of the Antichrist.',
        keyPoints: [
          'Named after Har Megiddo (Mount Megiddo) in Israel',
          'Final battle between Christ and Antichrist',
          'All nations gathered for war',
          'Christ returns to defeat evil forces',
          'Beast and false prophet thrown into lake of fire',
          'Precedes the Millennium in some interpretations'
        ],
        biblicalReferences: [
          'Revelation 16:16 - "They gathered at Armageddon"',
          'Revelation 19:19-21 - The beast\'s armies defeated',
          'Zechariah 14:2-4 - Nations gathered against Jerusalem'
        ]
      }
    }
  ],

  minorSigns: [
    'Widespread ignorance and loss of religious knowledge',
    'Increase in earthquakes',
    'Time will pass quickly',
    'Increase in killing and bloodshed',
    'Spread of wealth until no one accepts charity',
    'Competition in building tall buildings',
    'Women will outnumber men',
    'Intoxicants and adultery will be widespread',
    'Music and singing will be widespread',
    'People will wish for death due to trials',
    'The Euphrates will reveal a mountain of gold',
    'Arabs will return to worshipping idols',
    'The sun will rise from the West'
  ],

  timeline: {
    islamic: [
      'Minor signs (many already occurring)',
      'Appearance of the Mahdi',
      'The great battle (Al-Malhama)',
      'Emergence of the Dajjal',
      'Descent of Jesus',
      'Jesus kills the Dajjal',
      'Yajuj and Majuj released and destroyed',
      'Peace and prosperity under Jesus',
      'Death of Jesus and burial in Medina',
      'Major signs: sun rising from West, the Beast, etc.',
      'The Hour (Day of Judgment)'
    ],
    christian: [
      'Signs of the times (wars, earthquakes, etc.)',
      'Rise of the Antichrist',
      'Great Tribulation',
      'Battle of Armageddon',
      'Second Coming of Christ',
      'Defeat of Antichrist',
      'Millennium (1000-year reign) - in some views',
      'Gog and Magog war',
      'Final Judgment',
      'New Heaven and New Earth'
    ]
  },

  keyDifferences: [
    {
      topic: 'Role of Jesus',
      islam: 'Returns as a Muslim prophet, follower of Muhammad\'s law',
      christianity: 'Returns as God/Son of God to judge and reign'
    },
    {
      topic: 'The Mahdi',
      islam: 'Central figure who prepares for Jesus\' return',
      christianity: 'No equivalent; some view with suspicion'
    },
    {
      topic: 'Jesus\' Death',
      islam: 'Will die naturally and be buried in Medina',
      christianity: 'Already died and rose; will reign eternally'
    },
    {
      topic: 'The Cross',
      islam: 'Jesus will break all crosses (symbol of false belief)',
      christianity: 'The cross is central symbol of salvation'
    },
    {
      topic: 'Final Religion',
      islam: 'Islam will be the only religion',
      christianity: 'Christ\'s kingdom established'
    }
  ],

  conclusion: 'Despite differences, both Islam and Christianity affirm that Jesus will return, defeat evil, and establish justice. Muslims view Jesus as a prophet who will affirm Islam, while Christians view Him as God incarnate. The Quran states: "And indeed, Jesus will be a sign of the Hour, so have no doubt of it, and follow Me. This is a straight path." (43:61)'
};

// Helper function to get verse audio URL
export const getVerseAudioUrl = (audioId) => `${AUDIO_BASE_URL}/${audioId}.mp3`;

// Helper to search all content
export const searchContent = (query) => {
  const lowerQuery = query.toLowerCase();
  const results = {
    verses: [],
    hadith: [],
    stories: []
  };

  // Search verses
  results.verses = quranicVerses.filter(v =>
    v.translation.toLowerCase().includes(lowerQuery) ||
    v.transliteration.toLowerCase().includes(lowerQuery) ||
    v.surah.toLowerCase().includes(lowerQuery) ||
    v.topics.some(t => t.toLowerCase().includes(lowerQuery))
  );

  // Search hadith
  results.hadith = hadithCollection.filter(h =>
    h.translation.toLowerCase().includes(lowerQuery) ||
    h.narrator.toLowerCase().includes(lowerQuery) ||
    h.themes.some(t => t.toLowerCase().includes(lowerQuery))
  );

  // Search stories
  results.stories = storiesOfIsa.filter(s =>
    s.title.toLowerCase().includes(lowerQuery) ||
    s.summary.toLowerCase().includes(lowerQuery) ||
    s.content.toLowerCase().includes(lowerQuery)
  );

  return results;
};

export default {
  namesOfIsa,
  quranicVerses,
  hadithCollection,
  storiesOfIsa,
  maryamInfo,
  secondComingInfo,
  comparativeBeliefs,
  paganInfluences,
  propheciesAndDenials,
  endTimesInfo,
  getVerseAudioUrl,
  searchContent
};

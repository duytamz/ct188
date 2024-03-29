//thêm sự kiện nút chi tiết
//tìm tất cả các button
//let buttons = document.querySelectorAll('.show');
//buttons.forEach(button => {
   // button.addEventListener('click', function(){
        //alert("click me");
        //Tìm phần tử cha .box
    //    let parent = button.closest('.box');
    //    console.log(parent);
        //Tìm .chitiet trong .bõ cha 
   //     let chitiet = parent.querySelector('.chitiet');
   //     console.log(chitiet);
        //Hiển thị chi tiết
    //    chitiet.classList.remove('an');
  //  })
//})
const data =[
    {
        name: 'Chợ nổi Cái Răng',
        info:'Một biểu tượng đặc trưng của vùng thủ phủ miền Nam Bộ mà chắc hẳn nhắc đến Cần Thơ sẽ đi liền với chợ nổi Cái Răng. Đây là một nét đẹp truyền thống, lâu đời, là niềm tự hào bản sắc dân tộc mà bất cứ du khách trong và ngoài nước nên check in một lần trong đời. Nằm cách trung tâm thành phố chừng 5km, chợ nổi Cái Răng thường bắt đầu từ lúc rạng sáng 4-5 giờ và nhộn nhịp nhất từ khoảng 6-7 giờ. Vì thế bạn nên đến khu chợ sớm để tận mắt chứng kiến một khu chợ đầu mối trao đổi, buôn bán nhiều mặt hàng nông sản, trái cây, thực phẩm,… ngay trên những chiếc thuyền trôi trên sông. Tại đây sẽ có rất nhiều mặt hàng được bày bán, mỗi ghe sẽ “quảng cáo” sản phẩm cho khách hàng bằng cách treo món mình bán lên cây chèo bẻo trên ghe. Bạn sẽ được hòa mình vào cuộc sống tấp nập của người dân vùng sông nước, và có những góc chụp ảnh đặc sắc nhất.',
        img:'./image/chợ_nổi_Cái_Răng.jpg'
    },
    {
        name: 'Bến Ninh Kiều',
        desc: 'Một trong những địa điểm check in Cần Thơ nằm ngay trung tâm thành phố, nằm tại bờ phải sông Hậu, giữa ngã ba sông Hậu và sông Cần Thơ và tiếp giáp với đường Hai Bà Trưng. Với không gian thoáng đãng, đây à nơi rất nhộn nhịp du khách check in, dạo mát và ngắm cảnh đẹp nơi đây là nơi thu hút du khách daoh mát, ngắm cảnh và chụp ảnh. Tại đây bạn có thể ngắm nhìn toàn cảnh thành phố nhộn nhịp sôi động, hay nhìn về con sông hùng vĩ yên bình, là nơi neo đậu, xuất bến của nhiều ghe thuyền lớn nhỏ và các thuyền du lịch sang trọng. Đã đến Cần Thơ thì bến Ninh Kiều thơ mộng, trữ tình là địa điểm mà bạn không nên bỏ qua.',
        img:'./image/bến_NK.jpg'
    },
    {
        name: 'Cầu Cần Thơ',
        desc: 'Một trong những niềm tự hào của người dân Cần Thơ chính là cây cầu Cần Thơ bắc qua sông Hậu, nối liền 2 tỉnh Cần Thơ - Vĩnh Long. Đây là cây cầu dây văng có nhịp chính dài nhất tại khu vực Đông Nam Á. Cây cầu hùng vĩ, vừa dài, vừa cao tạo nên một công trình đặc sắc.',
        img:'./image/cầu_CT.jpg'
    },
    {
        name: 'Chợ đêm Tây Đô',
        desc: 'Chợ Tây Đô là một trong những trung tâm buôn bán lớn ở khu vực Nam bộ, đây cũng là một địa điểm giải trí hấp dẫn mà bất cứ du khách nào cũng muốn trải nghiệm khi có dịp đến với Cần Thơ.v Cách trung tâm thành phố chừng 1km, tại đây có những dịch vụ giải trí, ăn uống, ẩm thực khá nhộn nhịp và náo nhiệt. Vào ban đêm thì đây là một điểm được nhiều du khách lựa chọn.',
        img:'./image/chợ_đêm_Tây_Đô.jpg'
    },
    {
        name: 'Bãi tắm Cần Thơ',
        desc: 'Ngoài những địa điểm mang đậm chất miền Tây sông nước, thì có một địa điểm vui chơi nghỉ dưỡng mà bạn không nên bỏ qua là bãi tắm nhân tạo Cần Thơ. Đây là bãi tắm nước ngọt nhân tạo quy mô lớn nhất tại vùng Đồng bằng Sông Cửu Long.',
        img:'./image/bãi_tắm_CT.jpg'
    },
    {
        name: 'Cầu Tình Yêu',
        desc: 'Cũng giống như một số thành phố du lịch khác, Cần Thơ cũng có “Cầu tình yêu” của riêng mình. Cây cầu tọa lạc giữa ngã ba sông Hậu. Một vị trí thuận lợi để bạn dễ dàng nhìn ngắm Bến Ninh Kiều và Cầu tỉnh Cần Thơ. Cầu tình yêu cũng có khu vực treo móc khóa tình yêu dành cho những cặp đôi. Hay cặp vợ chồng muốn lưu giữ kỷ niệm đẹp tại miền Tây sông nước. Với mong muốn có một tình yêu trọn vẹn, lâu bền bên người thương.',
        img:'./image/cầu_tình_yêu_CT.jpg'
    },
    {
        name: 'Làng hoa Bà Bộ',
        desc: 'Một trong những địa điểm check in Cần Thơ nằm ngay trung tâm thành phố, nằm tại bờ phải sông Hậu, giữa ngã ba sông Hậu và sông Cần Thơ và tiếp giáp với đường Hai Bà Trưng. Với không gian thoáng đãng, đây à nơi rất nhộn nhịp du khách check in, dạo mát và ngắm cảnh đẹp nơi đây là nơi thu hút du khách daoh mát, ngắm cảnh và chụp ảnh. Tại đây bạn có thể ngắm nhìn toàn cảnh thành phố nhộn nhịp sôi động, hay nhìn về con sông hùng vĩ yên bình, là nơi neo đậu, xuất bến của nhiều ghe thuyền lớn nhỏ và các thuyền du lịch sang trọng. Đã đến Cần Thơ thì bến Ninh Kiều thơ mộng, trữ tình là địa điểm mà bạn không nên bỏ qua.',
        img:'./image/làng_hoa_Bà_Bộ.jpg'
    },
    {
        name: 'Khu du lịch Ông Đề',
        desc: 'Khu du lịch Ông Đề là địa điểm du lịch Cần Thơ nổi tiếng với ẩm thực và nhiều trò chơi dân gian thú vị. Nơi đây rất phù hợp cho các du khách đi theo nhóm đông hoặc gia đình có nhiều thành viên. Là khu du lịch sinh thái thu hút đông lượng khách mỗi năm. Ở đây thường xuyên tổ chức các trò chơi dân gian như: đạp xe đạp qua cầu ván, đi cầu khỉ, đi thăng bằng qua cầu dây, cầu thăng bằng. Nhà hàng ở đây có nhiều món ngon, phục vụ tốt.',
        img:'./image/khu_du_lịch_ông_đề.webp'
    },
    {
        name: 'Vườn trái cây Cần Thơ',
        desc: 'Chuyến du lịch Cần Thơ của bạn sẽ càng thêm trọn vẹn khi trải nghiệm thêm một đặc trưng vùng sông nước miệt vườn. Bạn sẽ có cơ hội tham quan vườn trái cây trĩu quả, thoải mái thưởng thức trái ngon ngay trên cành và có những bức ảnh trong vườn cây sai quả. Thời điểm lý tưởng để du khách tham quan miệt vườn vào mùa trĩu quả là lúc tháng 5-6, lúc này trái cây đang vào mùa nở rộ, mọi thứ thật tươi mới và xum xuê. Bạn có thể tham khảo các vườn như Mỹ Khánh, ông Sáu Dương, vườn vòng cung trên sông Phong Điền, Phụng Hiệp.',
        img:'./image/vườn_trái_cây_CT.jpg'
    },
    {
        name: 'Vườn Cò Bằng Lăng',
        desc: 'Một địa điểm check in Cần Thơ tiếp theo mà bài viết muốn gợi ý cho những tín đồ muốn hòa mình vào thiên nhiên. Vườn Cò Bằng Lăng với vé vào cổng chỉ 10.000 VND cho khách Việt và 20.000 VND cho khách nước ngoài, bạn sẽ được bước vào một khung cảnh thiên nhiên rộng lớn. Trải dài từ huyện Ô Môn đến huyện Thốt Nốt và cầu Bằng Lăng, tại đây có rất nhiều chủng loại cò như ò ruồi, cò sen, cò ma, cò cá, cò ngà, cò xanh, cò lép,… là tập hợp một sân chim lớn nhất nhì vùng miệt vườn. Đừng quên check in với những khoảnh khắc đàn cò bay thơ mộng nhé.',
        img:'./image/vườn_cò_Bằng_Lăng.jpg'
    },
    {
        name: 'Làng du lịch sinh thái Mỹ Khánh',
        desc: 'Nằm cách trung tâm thành phố Cần Thơ chừng 10km, là một điểm du lịch sinh thái với nhiều không gian đặc sắc đậm chất miệt vườn với vườn cây, ao cá, nhà cổ, kênh rạch,... Đến đây bạn sẽ hóa thân thành một người miền Tây tham gia nhiều hoạt động thú vị tại đây. Cuối tuần này, hãy lập ngay team bạn thân vi vu về làng du lịch sinh thái Mỹ Khánh để về với sông nước miệt vườn, với những góc sống ảo cực chất và vui chơi hết mình với sông nước.',
        img:'./image/làng_du_lịch_sinh_thái_Mỹ_Khánh.webp'
    },
    {
        name: 'Cồn Sơn',
        desc: 'Cồn Sơn - là một cù lao nhỏ nằm giữa dòng sông Hậu, có diện tích chỉ 70ha, nơi đây được phù sa bồi đắp quanh năm, sông nước màu mỡ. Có chưa tới 100 hộ dân sinh sống nhưng nơi đây sở hữu hệ sinh thái đa dạng mang đậm dấu ấn đặc trưng vùng quê Nam Bộ. Đây là một địa điểm check in Cần Thơ giúp bạn khám phá và trải nghiệm đặc trưng miền sông nước, cũng như làng nghề truyền thống tại đây.',
        img:'./image/cồn_sơn.jpg'
    },
    {
        name: 'Vườn du lịch sinh thái Lê Lộc ',
        desc: 'Một địa điểm du lịch Cần Thơ hấp dẫn khác phải nhắc tới là khu du lịch sinh thái Lê Lộc. Đây là khu sinh thái đặc trưng về miệt vườn sông nước miền Tây. Nếu đã đến Cần Thơ, đừng bỏ qua địa điểm hấp dẫn này nhé.Là khu du lịch có diện tích lên tới 2ha, nơi đây sẽ mang tới những trải nghiệm độc đáo cho du khách như: tát mương bắt cá, thu hoạch rau quả, tham gia các trò chơi dân gian. Đặc biệt, khu vườn trái cây có đa dạng quả, riêng cây măng cụt đã hơn 100 tuổi.',
        img:'./image/vườn_du_lịch_sinh_thái_Lê_Lộc.jpg'
    },
    {
        name: 'Nhà cổ Bình Thuỷ',
        desc: 'Nằm ở đường Bùi Hữu Nghĩa phường Bình Thủy, quận Bình Thủy, nhà cổ Bình Thuỷ là công trình cổ xây dựng năm 1870 thu hút đông đảo du khách tham quan. Với thiết kế gồm 5 gian 2 mái mang kiến trúc Pháp, trải qua nhiều năm nhưng nhà cổ vẫn giữ được nét đẹp nguyên sơ. Là một địa điểm check in Cần Thơ thu hút các bạn trẻ đến, để săn được những bức ảnh nghệ thuật ấn tượng. Nổi bật với những gam màu sáng đặc trưng, hay những mảng điêu khắc tinh tế và hoa văn cổ điển tạo nên điểm nhấn khác biệt cho địa điểm này.',
        img:'./image/nhà_cổ_Bình_Thủy.jpg'
    },
    {
        name: 'Thiền viện Trúc Lâm Phương Nam',
        desc: 'Nằm cách trung tâm thành phố Cần Thơ khoảng 15km, thiền viện Trúc Lâm Nam Phương có vị trí tại xã Mỹ Khánh, huyện Phong Điền. Với cảnh quan thoáng đãng, rộng nhất miền Tây sẽ mang lại cảm giác thanh tịnh và bình yên khi bạn đặt chân đến. Với kiến trúc và bản sắc văn hoá thời Lý – Trần đến đây ngoài tham quan, ngắm cảnh, bạn còn được tìm hiểu sâu hơn về lịch sử ông cha. Và với những góc chụp đầy nghệ thuật, bạn sẽ mang về những bức ảnh thật ấn tượng.',
        img:'./image/thiền_viện_trúc_lâm.png'
    },
    {
        name: 'Chùa Ông',
        desc: 'Nếu bạn là tín đồ của du lịch tâm linh thì Chùa Ông chính là một địa điểm mà bạn nên tham khảo, đây là ngôi chùa nổi tiếng linh thiêng vùng miền Tây Nam Bộ. Với kiến trúc mang đậm nét Trung Hoa cổ kính và lịch sử tồn tại hơn 20 năm. Đến đây bạn không chỉ được cầu nguyện, mà còn có cơ hội tham quan thêm về lịch sử văn hoá, và chiêm ngưỡng kiến trúc độc đáo của ngôi chùa trăm tuổi này, có những góc sống ảo thật nghệ ở nơi đây.',
        img:'./image/chùa_ông.jpg'
    },
    {
        name: 'Bảo tàng Cần Thơ ',
        desc: 'Đây là địa điểm du lịch Cần Thơ quen thuộc với rất nhiều du khách, tọa lạc ngay số 1 đại lộ Hòa Bình, Tân An, Ninh Kiều. Tại bảo tàng Cần Thơ, du khách sẽ được chiêm ngưỡng tận mắt những hiện vật mang đậm văn hóa, bản sắc của người Cần Thơ. Có diện tích rộng lên tới 3000m2, đây là nơi lưu trữ đầy đủ các đồ dùng, hiện vật, nói lên văn hóa truyền thống của người Cần Thơ qua từng giai đoạn phát triển của đất nước',
        img:'./image/bảo_tàng_CT.jpg'
    },
    {
        name: 'Di tích căn cứ Vườn Mận',
        desc: 'Nhắc tới địa điểm du lịch Cần Thơ cũng không thể không nhắc tới các di tích, địa điểm tham quan gắn liền với những năm tháng hào hùng của dân tộc. Nếu bạn là người yêu thích lịch sử Việt Nam, đừng quên ghé thăm di tích căn cứ Vườn Mận.Là di tích lịch sử lưu trữ dấu vết của cuộc cách mạng chống Mỹ cứu nước của dân tộc. Thể hiện tinh thần bất khuất, hào hùng của thế hệ đi trước để gìn giữ non sông đất nước. Tên căn cứ có là do trước đây nơi này trồng nhiều mận, hồng, đào nên lấy tên là Vườn Mận. Đây được coi là nơi ghi lại nhiều dấu ấn lịch sử, hào hùng của dân tộc.',
        img:'./image/di_tích_căn_cứ_vườn_mận.png'
    },
    {
        name: 'Lăng mộ nhà thơ Bùi Hữu Nghĩa',
        desc: 'Lăng mộ nhà thơ Bùi Hữu Nghĩa là một địa điểm tâm linh được người dân Cần Thơ rất tôn kính. Không chỉ là một nhân vật có tầm ảnh hưởng lớn tới người dân, ông còn là tấm gương sáng cho tấm lòng bao dung và thanh liêm “vì nước vì dân”.Nhà thơ Bùi Hữu Nghĩa tên hiệu Nghi Chi. Được sinh ra tại thôn Bình Thủy, tổng Vĩnh Định, châu Định Viễn, dinh Vĩnh Trấn (nay thuộc quận Bình Thủy, TP. Cần Thơ) trong một gia đình ngư dân nghèo. Ông từng đỗ thủ khoa giải Nguyên, được bổ nhiệm làm tri huyện. Sau nhiều biến cố, ông lui về làm nghề bốc thuốc và dạy học cho những người dân nghèo. Lăng mộ có diện tích 10.000 m2, xây theo kiến trúc cổ, trong đó có hồ sen, sân và cây cối. Nơi đây được xây để tưởng nhớ, là sự ghi nhận của nhân dân với sự đóng góp của ông.',
        img:'./image/lăng_mộ_nhà_thơ_Bùi_Hữu_Nghĩa.jpg'
    },
    {
        name: 'Bảo tàng quân khu 9',
        desc: 'Nếu muốn tìm một cách ngắn nhất để có thể tìm hiểu được văn hóa và con người Cần Thơ đừng bỏ qua địa điểm bảo tàng quân khu 9, nơi lưu trữ những năm tháng đấu tranh hào hùng của dân tộc và người dân nơi đây. Là địa điểm lưu trữ các hiện vật lịch sử gắn với chiến công hào hùng của nhân dân Cần Thơ trong hai cuộc kháng chiến chống Pháp và Mỹ. Tham quan bảo tàng giúp du khách có trải nghiệm, hiểu hơn về lịch sử, thành phố Cần Thơ, về văn hóa lịch sử con người nơi đây.',
        img:'./image/bảo_tàng_quân_khu_9.jpg'
    },
    {
        name: 'Cánh Nâu Garden Cafe',
        desc: 'Cánh Nâu Garden Cafe phục vụ thực khách và đem lại sự tuyệt vời khi thưởng thức các thức uống đẳng cấp, tinh tế cùng bữa sáng ngon lành bổ dưỡng. Hơn nữa nơi đây còn được kết nối, hòa quyện trong một không gian xanh mát với hoa cỏ trong lành, nên thơ và lãng mạn. Điều này đem lại sự an tịnh, thư thái và kết nối với nguồn năng lượng tích cực, yêu thương sau một ngày dài làm việc mệt nhoài. Khách hàng khi tới với Cánh Nâu Garden Cafe không chỉ được đắm chìm trong không khí ấm áp, mà còn được thưởng thức những ly cà phê, nước ép, sinh tố, trà,... đậm vị, tươi ngon. Trong không gian này mà bạn được cùng người thương, bạn bè, người thân trò chuyện, cùng ngắm nhìn quán, thì còn chi tuyệt hơn. Với nhu cầu không ngừng tăng của quý khách hàng cùng sự nỗ lực không ngừng của Cánh Nâu Garden Cafe đã có sự thay đổi tích cực trong quá trình hoạt động. Hiện nay, tại đây có phòng họp V.I.P giá cả vô cùng phải chăng với đầy đủ các tiện ích như máy chiếu, màn chiếu, bảng viết, loa âm thanh sống động,... đáp ứng đủ yêu cầu của một phòng họp tiêu chuẩn. Cánh Nâu Garden Cafe còn có menu ăn trưa đầy dinh dưỡng cho khách hàng đặt kèm với gói đặt phòng họp nữa đấy. Bạn hãy đến đây và trải nghiệm nhé.',
        img:'./image/Cánh_Nâu_Garden_Cafe.jpg'
    },
    {
        name: 'Nhà Gỗ Cafe - Wood House Coffee',
        desc: 'Nhà Gỗ Cafe - Wood House Coffee là ngôi nhà cổ có thâm niên trên 60 năm được xây dựng tại Hà Tĩnh, sau đó được tháo ra từng phần và chuyên trở vào Cần Thơ và lắp ráp hoàn thiện vào năm 2007. Nhà Gỗ Café được kết cấu bằng những thanh Gỗ Lim Xanh là một trong bốn loài cây gỗ quý của Việt Nam. Năm 2014, Nhà Gỗ Cafe - Wood House Coffee được tái kết cấu và được nâng độ cao nền lên trên 3m tạo thành quần thể cấu trúc hiện nay thu hút khá nhiều khách hàng đến đây để thưởng thức thức uống, tham quan, trải nghiệm không gian ấn tượng và đặc biệt này. Đây chính là một trong những địa điểm có view mở đẹp để thực khách check in cực lung linh nhé! Đến với Nhà Gỗ Cafe - Wood House Coffee thưởng thức một tách trà ấm, một ly cà phê, ngắm nhìn một không gian quen thuộc, một giai điệu không lời du dương... bạn sẽ thấy ngày mới thật nhẹ nhàng và bình yên. Bên cạnh đó, các thức uống tại Nhà Gỗ Café vô cùng phong phú với việc kết hợp nhiều hương vị, nguyên liệu được trình bày đẹp mắt và được pha chế với những nguyên liệu tốt nhất, đảm bảo an toàn vệ sinh thực phẩm cùng đội ngũ barista có chuyên môn và kỹ năng thực hành tốt mang đến cho khách hàng sự hài lòng nhất trong từng loại thức uống.',
        img:'./image/nhà_gỗ_coffe.jpg'
    },
    {
        name: 'Quán nước Hoa Yên An Bình',
        desc: 'Quán Nước Hoa Yên là một trong những quán cà phê có không gian đẹp ở Cần Thơ nhận được sự quan tâm của đông đảo bạn trẻ. Khi đến quán, bạn sẽ ấn tượng với vẻ đẹp kết hợp giữa văn hóa nông thôn miền Tây và làng quê Nhật, mang màu sắc của Thiền. Quán Nước Hoa Yên tận dụng không gian mở với nhiều cây xanh và bàn ghế gỗ, nhận lấy ánh sáng thiên nhiên từ đó giúp tạo không khí thư giãn dễ chịu, và thoáng đãng. Quán cà phê này thường được lựa chọn để học bài, làm việc, tâm sự cùng bạn bè. Ngoài ra, Quán Nước Hoa Yên còn được nhiều bạn trẻ nhắm đến để trở thành tọa độ sống ảo. Điểm đặc biệt tại Hoa Yên 1 đó là đồ uống siêu đẹp mắt, siêu ngon nhưng giá cả lại rất phải chăng. Đội ngũ nhân viên nhiệt tình, trách nhiệm và siêu chu đáo luôn ý chắc chắn sẽ làm bạn hài lòng. Quán cũng thường xuyên có những chương trình ưu đãi cho khách hàng siêu hấp dẫn. Nếu bạn cũng đang cần tìm một nơi để tác nghiệp hoặc để thả những chiếc dáng thật đẹp, hãy đến Quán Nước Hoa Yên để những tâm hồn nghệ thuật bay bổng trong không gian mơ mộng.',
        img:'./image/quán_nước_hoa_yên.jpg'
    },
    {
        name: 'Tiệm Trà Cỏ Ngọt',
        desc: 'Những bạn yêu thích các quán cà phê tại Cần Thơ thì sẽ không thể bỏ lỡ địa điểm Tiệm Trà Cỏ Ngọt. Không gian của quán được kết hợp giữa gỗ, thiên nhiên tạo nên cảm giác ấm cúng, gần gũi và lãng mạn. Quán có 3 chi nhánh và đều được đánh giá cao bởi những tín đồ sống ảo. Vào các buổi trong ngày, quán đều mang những vẻ đẹp đặc biệt nên khách hàng rất thích đến đây để chụp ảnh và tận hưởng một chút Cần Thơ yên bình. Thêm một yếu tố khiến các bạn trẻ thích đến nơi này chính là quán có các chú cún, mèo vô cùng xinh xắn. Thức uống của quán Tiệm Trà Cỏ Ngọt không quá đa dạng về loại nhưng được pha chế tỉ mỉ nên hợp với khẩu vị chung của khách hàng. Vị trí của quán không nằm ở trung tâm nên sẽ khá khó khăn đối với những bạn lần đầu đến, bạn có thể theo dõi fanpage của quán để được hướng dẫn đường đi. Không gian có cây xanh tươi mát, kết hợp với chút nhạc thì quá thích hợp để bạn trò chuyện hay đọc sách nhỉ. Nhất là những bạn thích chụp ảnh thì nhất định không thể nào bỏ qua cái tên Tiệm Trà Cỏ Ngọt được đâu đó!',
        img:'./image/tiệm_trà_cỏ_ngọt.jpg'
    },
    {
        name: 'Raw Coffee',
        desc: 'Nếu nói đến một quán cà phê có một không gian thơ mộng vừa ấm cúng, vừa thoáng mát, mà lại còn vừa pha tí cổ điển tại Cần Thơ, không thể không nói đến Raw Coffee. Raw Coffee là một quán cà phê bình dân nhưng lại mang một phong cách vô cùng độc đáo, Raw Coffee không phải là một không gian quá sang trọng hay được trưng bày bởi các món đồ cổ quý để thu hút khách hàng, mà ở Raw Coffee mang thiên hướng về sự dân dị, sự mộc mạc đời thường với kiểu "quán cóc" được bố trí ngoài sân với vẻ đẹp thơ mộng của khoảng sân với ánh nắng, bóng cây che mát, chan chứa sự hoài niệm về ngày xưa. Ở Raw Coffee không chỉ là một không gian thoáng mát rộng rãi, mà đâu đó còn có cả sự ấm cúng , sự nồng nhiệt của người chủ ở đây, một tình cảm hết sức chân thành của quán dành cho khách hàng tạo nên một không khí gần gũi và hết sức thoải mái cho khách hàng khi ghé đến nơi đây. Nếu bạn là một người yêu thích sự bình dị, thích sự gần gũi với cảnh hoài cổ, thì có thể nói Raw Coffee là một địa chỉ dành cho bạn khi đến nơi đây. Hy vọng về một sự trải nghiệm thú vị dành cho bạn!',
        img:'./image/Raw_Coffee.jpg'
    },
    {
        name: 'La Rose Kafe',
        desc: 'La Rose Kafe có không gian rất sang chảnh và cực kì thu hút những bạn trẻ có tâm hồn nghệ thuật và yêu thích chụp ảnh. Bạn có thể có bất cứ một tấm hình đẹp nào tại đây mà không hề tốn công sức. Không gian đẹp của quán là một thế mạnh để mọi người yêu thích và ấn tượng mỗi khi nhắc đến cái tên La Rose Kafe. Mọi sự sắp xếp, bày biện cũng như nội thất đều có một decor sáng sủa trang nhã, lịch sự và rất chảnh. La Rose Kafe không chỉ đẹp về không gian mà đồ uống cũng rất ngon, được trình bày mang tính thẩm mỹ cao khiến quý khách thêm hài lòng về quán. Hơn nữa, nhân viên phục vụ rất nhiệt tình, thoải mái và thân thiện. Bạn có thể ngồi đây rất lâu mà không hề cảm thấy bất tiện hay không vui. La Rose luôn là sự lựa chọn hàng đầu của những khách hàng trong khu vực. Còn gì ấm áp hơn khi bình thản ngồi ở đây thưởng thức từng ly nước uống thơm ngon, ngọt ngào cùng người thương yêu và ngắm nhìn khung cảnh yên bình bên ngoài. Bên trong bàn ghế bố trí khá đều nhau. Không gian quán lại có gam màu trung tính chủ đạo nên cũng khá sáng.',
        img:'./image/La_Rose_Kafe.jpg'
    },
    {
        name: 'LegoCoffee',
        desc: 'LegoCoffee chắc hẳn là cái tên không quá xa lạ gì với những ai có sở thích ngồi làm việc ở quán cafe. Nếu bạn chưa biết đi đâu chiều nay thì thử ghé LegoCoffee vừa nhâm nhi chút trà bánh vừa ngắm hoàng hôn qua khung cửa sổ cùng dòng người tấp nập đi qua - một cảm giác bình yên khó tả. Menu của LegoCoffee đa dạng, từ cafe, trà, đá xay,... với mức giá trung bình so với mặt bằng chung các quán ở Cần Thơ. Không gian của quán cafe này mang hơi hướng hiện đại, được trang trí thêm rất nhiều phụ kiện như gương, tranh, đèn, cây cảnh tạo nên vẻ đẹp rất riêng. LegoCoffee với không gian lý tưởng để ngồi làm việc hơn vì không gian rộng rãi, thoải mái. Quán tận dụng ánh sáng tự nhiên, cộng thêm chiếc view xanh mát bên ngoài tạo nên cảm giác thoải mái và dễ chịu. Bàn ghế được sắp xếp hợp lý, có các dãy bàn dài tiện cho việc học nhóm đông người. Ổ điện được trang bị ở nhiều nơi nên đỡ phải lo phải loay hoay tìm hoặc dời chỗ ngồi để sạc. Bàn ghế của LegoCoffee có chiều cao khá phù hợp với với sinh viên và dân văn phòng làm việc.',
        img:'./image/LegoCoffee.jpg'
    },
    {
        name: 'Tojime',
        desc: 'Đến với Tojime, khách thì khách sẽ được thưởng thức ly cà phê rang xay thơm lừng mang đậm chất cà phê và với menu đồ uống rất bắt mắt. Với ánh đèn vàng lung linh lãng mạn làm cho cả quán ánh lên một điểm nhất rất tuyệt vời cùng với cách trang trí ở trong quán bạn sẽ có những bức ảnh cực chất. Không gian Tojime được bố trí, trang hoàng lung linh. Ngoài ra, quán còn có không gian ngoài trời tầng thượng để vừa ngắm hoàng hôn, nắng chiều vừa thưởng thức không khí mát mẻ buổi đêm với tầm nhìn ra phố phường tấp nập. Đây là một quán cafe đáng được khách đến để thưởng thức phải không nào? Và hơn thế nữa, giá của đồ uống trong quán lại rất rẻ, khá phù hợp với túi tiền của các bạn. Những ly cà phê của Tojime luôn đong đầy cảm xúc dành cho bạn, những người yêu cà phê. Tojime luôn cẩn thận từng mẻ rang nhỏ đảm bảo hương vị cà phê luôn tươi mới góp phần đem lại hứng khởi làm việc cho các bạn. Cà phê là chia sẻ, hạnh phúc khi được đồng hành cùng mọi người. Nếu chưa thì hãy lưu lại địa chỉ Tojime. Tại đây có không gian thoáng mát, rộng rãi. Bên cạnh đó, thực đơn của quán rất đa dạng với nhiều món ăn ngon, đồ uống xịn dễ dàng chiều ý của thực khách.',
        img:'./image/Tojime.jpg'
    },
    {
        name: 'Lily Cafe',
        desc: 'Điểm đến tiếp theo mà Toplist muốn gợi ý đến bạn chính là quán Lily Cafe nằm ở khu vực bờ hồ Xáng Thổi - đường Huỳnh Cương. Khi thực khách đến Lily Cafe, không gian tạo cho người nhìn một cảm giác ấm cúng, không kém phần trẻ trung, năng động. Quán tận dụng không gian cửa kính để khách hàng vừa uống nước vừa ngắm thành phố. Khi đến quán vào buổi sáng ánh nắng cũng rất lí tưởng để chụp ảnh. Nhân viên của quán vô cùng thân thiện và nhiệt tình, đối với những ai mải mê sống ảo quên lối về cũng sẽ cảm thấy dễ chịu vì sự mến khách của quán. Lily Cafe có nhiều loại đồ uống đặc trưng và cực kỳ hấp dẫn với công thức pha chế tinh tế, tỉ mỉ giữ nguyên được hương vị tự nhiên của đồ uống. Ngoài thức uống, quán còn phục vụ nhiều loại bánh, bingsu để bạn thưởng thức cùng ly nước thơm ngon của mình. Thức uống và bánh được phục vụ khá nhanh chóng, nên bạn không cần đợi chờ quá lâu. Nhìn chung, mức giá phù hợp với chất lượng dịch vụ nhé. Đặc biệt, bạn có thể ngắm nhìn không gian đường phố về đêm cực thú vị, đầy ấn tượng và có cho mình những shoot hình lung linh dưới ánh nắng ban ngày và ánh đèn huyền ảo ban đêm đấy nhé!',
        img:'./image/Lily_Cafe.jpg'
    },
    {
        name: 'Tiệm Cà Phê Nhà Có Khách',
        desc: 'Tiệm Cà Phê Nhà Có Khách là một địa điểm khá mới nhưng có sức hút không hề kém cạnh, quán nổi bật với khuôn viên rộng rãi chan hòa với thiên nhiên. Nhiều thực khách cho rằng quán mang dáng vẻ của cà phê Đà Lạt với gỗ và những vườn cây xanh. Khách hàng thường đến đây để chụp ảnh sống ảo và tận hưởng không khí trong lành. Quán nằm trong một con hẻm trên đường Nguyễn Văn Cừ nên không quá ồn ào bởi xe cộ tấp nập, thích hợp để gặp gỡ bạn bè. Màu sắc chủ đạo ở Tiệm Cà Phê Nhà Có Khách là xanh lá của cây cối và pha lẫn màu nâu của gỗ, nhà, bàn, ghế. Sự cổ xưa được quán phối hợp, bài trí một cách tinh tế, đủ để tạo cảm giác hoài cổ, hoài niệm, đồng thời giúp khách hàng ở quán có chút khoảnh khắc quay về thời xa xưa, lòng bình tĩnh lại và cảm thấy bình an hơn. Ngoài ra thì quán cũng có ca nhạc để khách hàng có thể vừa thưởng thức nước vừa tận hưởng nữa đó. Vào buổi tối, Tiệm Cà Phê Nhà Có Khách sẽ lung linh với những dây đèn được bố trí tinh tế ở nhiều góc nên chuyện check in cũng không là vấn đề. Về thức uống, quán vẫn phục vụ những loại nước cơ bản nhưng hương vị khá hợp với khẩu vị chung. Thêm vào đó, quán còn có đội ngũ nhân viên rất nhiệt tình, dễ thương và phục vụ chu đáo nên nhận được sự ủng hộ nhiệt tình của người dân Cần Thơ.',
        img:'./image/Tiệm_Cà_Phê_Nhà_Có_Khách.jpg'
    },
    {
        name: 'Cafe 1985 CanTho',
        desc: 'Với phong cách hoài cổ, mang hơi hướng vintage, Cafe 1985 CanTho được xem như một trong những quán cafe có không gian đẹp ở Cần Thơ được mọi người yêu thích. Điều đặc biệt hơn cả là background ở Cafe 1985 CanTho khá đẹp mắt, phù hợp để chúng ta lưu lại những tấm ảnh làm kỉ niệm. Từ cách bài trí cho đến những phụ kiện trang trí đều được đầu tư, chăm chút kĩ lưỡng. Thêm vào đó, Cafe 1985 CanTho còn bật nhạc theo chủ đề từng ngày với giai điệu nhẹ nhàng, êm ái, thích hợp để chúng ta thư giãn, tìm cho mình một không gian lãng mạn, bình yên. Cafe 1985 CanTho tựa như một ngôi nhà cổ xưa có ba tầng với không gian trắng tinh tế, điểm xuyết trên nền là các giỏ hoa khô mộc mạc. Đến với quán, ngoài việc thưởng thức món ăn, thức uống ngon, bạn còn được chiêm ngưỡng những đồ dùng, máy móc, hình ảnh thuở xưa… và thưởng thức những ca khúc trữ tình hay nhạc Anh, Pháp của các nhạc sĩ nổi tiếng một thời. Ngoài ra, menu đồ uống cực chất của quán Cafe 1985 CanTho, kết hợp nhiều loại bánh ngọt vô cùng hấp dẫn ở đây có giá cực phải chăng. Thế nên trong những dịp rảnh rỗi cần hẹn hò cùng bạn bè, bạn hãy sắp xếp thời gian để ghé tới quán Cafe 1985 CanTho nhé!',
        img:'./image/Cafe_1985_CanTho.jpg'
    },
    {
        name: 'Wimi Coffee And Tea',
        desc: 'Bạn là một freelancer với giờ làm việc linh động nhưng cũng không muốn ngồi ở nhà, nơi dễ khiến người ta trở nên lười biếng & đang muốn tìm kiếm một góc quán cafe yên tĩnh để tập trung vào công việc của mình? Không gian khoáng đạt, mát mẻ với nhiều mảng xanh tươi mới của Wimi Coffee And Tea sẽ giúp bạn luôn tràn đầy hứng khởi và sáng tạo ra nhiều phương thức làm việc hiệu quả. Tất nhiên không thể bỏ qua loạt thức uống từ cafe tiếp thêm sự tươi tỉnh và tập trung cho bạn tại Wimi Coffee And Tea. Không gian trầm ấm dễ thương nơi đây sẽ giúp bạn có những phút giây thật yên tĩnh và thoải mái cho một tuần vất vả với công việc. Cuộc sống sẽ bớt thú vị nếu thiếu những lời rủ nhau “Đi cà phê đi”. Ngoài việc gắn kết tình cảm thì đi cà phê còn mang đến sự thư giãn lạ thường, giúp mọi người có thêm nhiều ý tưởng và những lời khuyên bổ ích. Giữa thiên đường các quán cà phê ở Cần Thơ, Wimi Coffee And Tea vui mừng vì là sự lựa chọn dừng chân quen thuộc của nhiều khách hàng thân thương. Bên cạnh thực đơn đa dạng, nhiều khách hàng đã đánh giá cao không gian vừa đủ ánh sáng ấm áp, vừa đủ yên tĩnh cho những cuộc chuyện trò. Giải pháp đơn giản nhất để xua tan mệt mỏi là hãy thư giãn và đến Wimi Coffee And Tea - nơi có đủ sự ấm cúng và không gian an tĩnh cho những tâm hồn đang cần một chút bình yên.',
        img:'./image/Wimi_Coffee_And_Tea.jpg'
    },
    {
        name: 'Infini-T',
        desc: 'Infini-T là một quán cà phê lâu năm ở Cần Thơ thu hút đối tượng khách chủ yếu là các bạn học sinh, sinh viên. Quán có cách trang trí hiện đại và mang hơi hướng Hàn Quốc nên khi chụp ảnh sẽ vô cùng lung linh. Không gian quán không quá rộng nhưng có nhiều chỗ ngồi, có cả phòng riêng để bạn đặt trước cho việc học nhóm. Quán chiếm trọn cảm tình của khách hàng không chỉ bởi vì không gian nhẹ nhàng, bình dị và tinh tế, mà còn đến từ cung cách phục vụ và chất lượng thức uống nơi đây. Mỗi đồ uống của Infini-T không chỉ cần đạt chuẩn về hương vị, mà còn được yêu cầu về sự tinh tế, tỉ mỉ trong khâu bài trí để đem đến những trải nghiệm trọn vẹn cho mọi người. Mức giá của các loại thức uống nhìn chung phù hợp với chất lượng, thích hợp với các bạn trẻ. Nếu bạn muốn tìm một không gian cà phê thư giãn mới, nhẹ nhàng thì nên tham khảo Infini-T nhé. Với sự tinh tế đến từ không gian thiết kế, vật dụng cũng như từng góc nhỏ tại quán, Infini-T cho khách hàng một nơi để thoả thích chụp ảnh sống ảo, lưu niệm cùng người thân, bạn bè.',
        img:'./image/Infini-T.jpg'
    },
    {
        name: 'The Kantho Coffee',
        desc: 'The Kantho Cafe có thể nói là một trong những địa chỉ đã không còn mấy xa lạ với người dân tại Cần Thơ. Với cách trang trí độc đáo, kết hợp giữa phong cách hiện đại, sang trọng và nét cổ điển, duyên dáng, tinh tế với các bức họa trên tường, hay những viên gạch xếp lớp màu xám tro. Không những mang lại cho bạn một không gian cà phê yên tĩnh mà còn là một bầu không gian nghệ thuật bên trong đó giúp mang lại cho bạn những sự trãi nghiệm tuyệt vời nhất. Tại The Kantho Cafe các món ở đây khá đa dạng và giá cũng rất phải chăng, phù hợp với mức sống của dân Cần Thơ mình, nhất là giới học sinh, sinh viên và những buổi hẹn hò gia đình vì chỉ nằm từ 20 cho đến 35k. Và nói đến Best-seller của quán thì phải kể tới các món có kem cheese và các loại trà trái cây. Kem cheese mặn mặn, đặc sệt chứ không bị lỏng bỏng như milkfoam hay ngọt nhạt, còn trái cây lại rất tươi hết sức tuyệt vời. Và nếu bạn đang tìm kiếm một chốn dừng chân yên tĩnh và thoải mái ở Cần Thơ mình, thì đừng bỏ lỡ The Kantho nhé chắc chắn sẽ mang đến bạn những trải nghiệm vô cùng tuyệt vời!',
        img:'./image/The_Kantho_Coffee.jpg'
    }
]
  // Lấy các phần tử DOM cần thiết
  const detailButton = document.getElementById('detail-button');
  const imageContainer = document.getElementById('image-container');
  const infoContainer = document.getElementById('info-container');
  
  // Gán hình ảnh và thông tin ban đầu
  imageContainer.src = data.image;
  infoContainer.textContent = data.info;
  
  // Xử lý sự kiện khi bấm vào chi tiết
  detailButton.addEventListener('click', function() {
    // Ẩn thông tin trang
    imageContainer.style.display = 'block'; // Hiển thị hình ảnh
    infoContainer.style.display = 'block'; // Hiển thị thông tin
  
    // Có thể thêm logic xử lý khác tại đây
  });
  

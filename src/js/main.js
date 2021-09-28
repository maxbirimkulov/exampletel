


$(document).ready(function () {
    //Табы на сайте
    $('ul.works__menu').on('click', 'li:not(.works__list_active)', function() {
        $(this).addClass('works__list_active').siblings().removeClass('works__list_active')
            .closest('div.works__tabs').find('div.works__content').removeClass('works__content_active').eq($(this).index()).addClass('works__content_active');
    });

    //Карусель на сайте


    var owl = $('.owl-carousel');
    owl.owlCarousel({
        dotsContainer: '#carousel-custom-dots',
        loop:true,
        margin:30,
        autoplay:true,
        
    });
// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    ///maps
    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.878982, 74.595075],
            zoom: 17
        });
        var myIcon = DG.icon({
            iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX+UAD///8AAAD+SgD+TQD+SQD+RQD+QgBycnL19fXh4eFnZ2cpKSk0NDT/+fbJycn/1Mf/sZv/i2L/tpj/28r/k2z+hlX/29P/0Lz+g1j+PAD/qoz/+fP/9O/+cTX+aDX/ybb+VxP/7uXCwsL/vaT/wLP/xaf+im3+YC7+XiD/4tP+fFn/wq3+cEH+gmH/wKD+m4L+poH/5tr+fUn+mnr+XgD+djj+ekb+kmf+lnr+s6L+ron+nnv+aCL/0cb+o4j+ekBaWlr+dU4eHh7/rpX+byz/p4/+m3D/zbT/w7j/2cP+l2f+qoT+cy3+saD+ZS/fomafAAAKzklEQVR4nO2dCXuiSBqAYeqgd2bWCaAJYhRx0DRGktFoDqPRdXI4Tm/7///NfsXhyXS6ozHFPt/7dOeRUki91l0UFUVBEARBEARBEARBEARBEARBEARBEARBEAT5v4PS7w/NGIQR4eG6LgiJg/VQYQkHHxzJt0O5Uvzj0Zvma6paa1qeOSq6nBAIHZme1RSh+TBU4VlMTcrtp8eTsrpGudkfX+tboSf6tZ01SUocs6b+AGUvIBlypLyn/5Bf5DjMTDoSd/DDfqFj289GpUOMzlv8BLVCBhQpb+feKqiquZL0OZX6rbf7CSzJcyrzj3YTVNV8hX20xTcgT2+qYtbJVeRNRTp/cx2zSs2RVZFyax+CkFEVSasbau5HUFVbchqy7r4EVXUkY21Drjaj+a+E9aNUNs81JFTk+c1Yfvol4tPPcPDbL99k89yO9tE+WzBjK6v9+VPEr8Lw95++ydbJBdkSkfonW5H8NY79v99i2PElq21YYSuOuxmqA8kSkZe347ib4akrVSKS4+0o7miovkiViLy6f8MjmapTOkzrkK4Z/vxpwb8Trf8sw1JOLw8lyqbsLG3Uu2a40v5/Sgx/V/+xxQdyXYmyKfVSYrhhuGRh+FvaWUuqH621gtt8D8POXJpsSj+nxnBXQ3Uij2HwPoZFaUbCqa3hHgzl6Zuyl/cxvOcfbZbAS+9jeCmNoZbWo9mDoSVNr0bbGvzux7Bjf7RZgpY+x7azYVOaNOSpXZrdDafyGLbfx9CUpqZht+9jKM8wf3sicT+GhjR9Guq8j+G5PIb+6XsY5gJpet6Kktpc7GqYl2guio3ew1CXpqIRVU3KZOKuhqfyDJ4Auj3jvbNh56Ol1uCP+zf0pOnRCOhw/4ZjeeoZQdoAajdDS6ZSCJDJdl2zk2FOng5NDNP3a9iSqKmIoP7WtHci8ueG4S/JG79/w1CmKf2Y7cma3xI25ux//ofwVUypKtII6qbPZbyJpmx3gENoZQ9LviJyY9mqmQj2tMO6yzXBK2kG9xvwwX4MS3KmoICkdd5+GE9eQUhFffeM2pI1i0bQwq6KA1kXJibw3WrU2pWEDeEGpLJDu9gMZC6DCZQP3rhUuNbOynMz3H9Mm9V4hbLuy13HrCIee/pRQc/J1vOIVBsOHlLqnNrRUWroKDsPPS2gnAaF6fpU8bQbKEpwN11rUU6nd0E2n0AEScZt3rs+Hnhe2xj3iM0ZjUJZ79qA0IFx3WNRaIYRz8Fyzsl6KYtCGclW2UMQBEEQBEEQBEFWoTCwS15skz4dSJK32dp0mrjC5rXjADGoXL8PDCGHGU3S4FEfkPCFnkLqOh9SjN8tdY8ry4hS/1F/XP18GBApduHTg9VrsIKuH2alGzFyal7EgpylzZmlPkLAV6becrX7IE4cWimrp6uT3LSSU9VwdTcNN9hYfeJCrLU+zBMYrximLuzl65OL5XihRYphWc2tGHY+1pDOjZgSxKUYvSxU0jKSMPQm5+fnxsu9eAosF22184phTVUHy+/rAwwVSiL4saqe2PFBakkRhiVNvM24ZkDMO+HKylcMX3Jq2Vlc7yMMFyHC8Jv3jELD5BwOF1BvRVxfMSy2INMvKqIMGYZPL4T3QV8zFAutFnejsmQo9l8IP/+aIYdEtJLTsmRIr6EW+Z5cynvqchOQTBk+QYMRvnjFkGil5eqhLBmKLSY635NLSbgvU9xiZMlQ7E/gfU9NQxQutvWJ1i5kyJAF5fgZ39cNFZJPuklZMKQCRgLo1TRdEfw9hldQZifi65Df8FHp9XrDyp2XW6wA/g5DhYoWQ2RTuQzpxnhRGJY7QK0W3v89pguh1wzJDeTpKyaZ4eqjXs8iUmtji1prGJ9OnyD2aydel9XauqEiWowOVDbyG3amQAOU7u3FCHgIh6uXouNc/Gzs0lBRyuH2ZnIZ+lY1ISxxi7pUNIXlp4Vhr5y0BcmVcups01BsBFdzqFSGCtUSluWwtKjzreWZMJDqrRiKZ2+mm4bUPRILv+Uy3GRpSIPVca3WicdRMbSa7DOwmkvF9XNDOyOG0ULimzimYhx1tLwWnUNTGW28s2qo2CBezYyhQvPL3jS5gWJZXHbnbqHERfNpa4Y0OIXRfmYMyTwnimJc+iDROkG0ZIiyyimkVdxUrhqGy6u9aVYMo9Xg8RERa4prpSei2byiQ81aDtIMqV9Tc53MGFKx6VLy5BYJ92MoQ4enLFZs5pLx7rphsqdfRgwVBqWvU4izqbay3jZXvVoUvXVDheUPZ0hvpjNz7TfR8cwyv/m72ctsdruML59688XnidOdihWZtZlpKMvPmNZsdQ6fFi3g+DCLpKE556+FbMI0bTVya/dYKNNsW/xbu6vDNW1t6pWI/kMWVoEjCIIgIWIShoa35sP+JGXxUnTCxR82YmJNtzgMAwmP3hFL98Ur+EmiQBouamdJC0HDq4UTO+FHKYnv/dPwjj4Jr3sowaBf168ouajXR08QD1+vP4s/SkGL/XrXZd16vStGDu4z9E/InS4Ei3V30h9S6K/9NfEL7kUdjC+KlLrdul6Mvp1Kv/58w/V6/S/DqfuUBgV691cdDh32DD/v6HO9XziQISlMiy9WV+t7xXZ+zib52+IgH1BebRnGF1ez2kWz5Srk3IKBn/bQgf6nZp1+vqvpHLo2p3dOw9VPC4w9fuF+s128/TtMagOucntsd14MY35W9ji5uFQCY5Q3DJ/Xbg0jUKZdo+Ed5rEhUjA1Ppkq/YFmt7/yqcGJ1r20jSONEKbw6pjzowll5p11Q7WHe49Sv2l9vrs/gpTJe3+A4ddBc86f23b1JTwFYLMiJ4Rq+R5n7My0ihwMKb9piDzbUUT2bzjcrvVS7zC/hyELGqHh/UgROwHRysxuvTAoV5CUY41YkKR5/8Vj2sNxw9H0v8Hwi3nHi+ZjaNgtPWrPbUXsSk6i8tkJ4641x8OhcmYWLQUMoQfcgNzPO/8dDl0w1MiBNnQhhYYzmT5qX6svl0c9/0QRw7em/WAQ6uW+2JY5sDyF3VZtx5prD9f9gpunwvD8krauzMjQnc2f2y58OX5HzETRXif0tGtHVmt+5tFW4VwYTiJDy6oG1Cq1j9oHyqVG/v5y5PKv1qg25G5eJERg2X349dqgbVveqNMj7MTyvJphP4wr1tm9InKpYt003MhwoHVbozaFNKT2iUg9Eq1cgFyqcXbmkSB/tZKGVIOEtvS+daAnbEgBfjlReH8AZU+h3ggqdq/Nx825wtuQhmO75JHi7LMDoyL74UazZudg2L23RzNdCw37A8arVtvWPZdqYf5kjRFUtL6WhwqXQBrykiUMryLDMAc35qw6OEx7AeUwnNvVB0xrjbhTvTQvTVfhg8a9N721qzfEn431NocvvNmrjtlNV3FFLuVuaQ71j3Pp6l1Gg1P4RMs0zXxPES2QdeldDrSmZ5rHFyY0lrUGjdOQnVyaZgHKIZs3D1PTKH64xoU6c6glHfjqz88mIvsQ//wsgLi68JYf+GG8XXEEtWXgfoZPQ5PufHYd+AEfn0AAdc4unPCa4VV8Orm4uHDgonCJAEJd8WYYGCgOtECBexBBJZ4mCwtF+J8kAeJFFBqHJDNqdOUkGp8ZnbpYYRSdHC45WrwdnbQS+P5uCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgSLb5HybTLbpnBvJ8AAAAAElFTkSuQmCC',
            iconSize: [40, 40],
            className: 'icons'

        });

        DG.marker([42.878982, 74.595075], {icon: myIcon, label:'IT-RUN'}).addTo(map).bindPopup('IT-RUN ACADEMY');
    });


    $('.pricing__btn').on('click', function () {
        // $('.overlay').addClass('overlay__active')
        $('.overlay').fadeIn('slow')
        $('.overlay__form').addClass('overlay__form_active')
    });

    $('.overlay__close').on('click', function () {
        $('.overlay').fadeOut('slow');
        $('.overlay__form').removeClass('overlay__form_active');
        $('.overlay__thanks').removeClass('overlay__thanks_active')
        $('.overlay__joke').fadeOut(10000)
    });

    $('.overlay__btn').on('click', function (event) {
        event.preventDefault();
        $('.overlay__form').removeClass('overlay__form_active');
        $('.overlay__thanks').addClass('overlay__thanks_active');
        $('.overlay__joke').fadeIn(10000)
    })
});

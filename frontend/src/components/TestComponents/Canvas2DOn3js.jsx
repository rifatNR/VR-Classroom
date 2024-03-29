import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

const testLine = [
    {
        x: 497,
        y: 264,
    },
    {
        x: 498,
        y: 264,
    },
    {
        x: 500,
        y: 263,
    },
    {
        x: 504,
        y: 263,
    },
    {
        x: 510,
        y: 262,
    },
    {
        x: 517,
        y: 259,
    },
    {
        x: 525,
        y: 259,
    },
    {
        x: 532,
        y: 258,
    },
    {
        x: 542,
        y: 255,
    },
    {
        x: 552,
        y: 254,
    },
    {
        x: 563,
        y: 249,
    },
    {
        x: 573,
        y: 245,
    },
    {
        x: 584,
        y: 240,
    },
    {
        x: 596,
        y: 236,
    },
    {
        x: 605,
        y: 234,
    },
    {
        x: 617,
        y: 231,
    },
    {
        x: 631,
        y: 231,
    },
    {
        x: 646,
        y: 227,
    },
    {
        x: 664,
        y: 224,
    },
    {
        x: 689,
        y: 221,
    },
    {
        x: 718,
        y: 218,
    },
    {
        x: 744,
        y: 214,
    },
    {
        x: 771,
        y: 209,
    },
    {
        x: 797,
        y: 203,
    },
    {
        x: 821,
        y: 198,
    },
    {
        x: 835,
        y: 195,
    },
    {
        x: 848,
        y: 191,
    },
    {
        x: 861,
        y: 188,
    },
    {
        x: 872,
        y: 185,
    },
    {
        x: 880,
        y: 182,
    },
    {
        x: 884,
        y: 179,
    },
    {
        x: 888,
        y: 177,
    },
    {
        x: 889,
        y: 176,
    },
    {
        x: 889,
        y: 175,
    },
    {
        x: 888,
        y: 175,
    },
    {
        x: 884,
        y: 174,
    },
    {
        x: 874,
        y: 173,
    },
    {
        x: 861,
        y: 171,
    },
    {
        x: 844,
        y: 170,
    },
    {
        x: 827,
        y: 168,
    },
    {
        x: 804,
        y: 167,
    },
    {
        x: 777,
        y: 167,
    },
    {
        x: 742,
        y: 167,
    },
    {
        x: 704,
        y: 167,
    },
    {
        x: 664,
        y: 167,
    },
    {
        x: 623,
        y: 167,
    },
    {
        x: 584,
        y: 167,
    },
    {
        x: 549,
        y: 167,
    },
    {
        x: 523,
        y: 171,
    },
    {
        x: 500,
        y: 172,
    },
    {
        x: 480,
        y: 174,
    },
    {
        x: 466,
        y: 175,
    },
    {
        x: 449,
        y: 177,
    },
    {
        x: 428,
        y: 181,
    },
    {
        x: 407,
        y: 186,
    },
    {
        x: 388,
        y: 190,
    },
    {
        x: 368,
        y: 194,
    },
    {
        x: 354,
        y: 197,
    },
    {
        x: 341,
        y: 200,
    },
    {
        x: 331,
        y: 203,
    },
    {
        x: 322,
        y: 206,
    },
    {
        x: 312,
        y: 208,
    },
    {
        x: 304,
        y: 209,
    },
    {
        x: 296,
        y: 210,
    },
    {
        x: 292,
        y: 211,
    },
    {
        x: 290,
        y: 212,
    },
    {
        x: 288,
        y: 215,
    },
    {
        x: 287,
        y: 218,
    },
    {
        x: 287,
        y: 222,
    },
    {
        x: 286,
        y: 225,
    },
    {
        x: 286,
        y: 229,
    },
    {
        x: 286,
        y: 232,
    },
    {
        x: 287,
        y: 236,
    },
    {
        x: 288,
        y: 239,
    },
    {
        x: 288,
        y: 243,
    },
    {
        x: 288,
        y: 247,
    },
    {
        x: 288,
        y: 251,
    },
    {
        x: 288,
        y: 255,
    },
    {
        x: 288,
        y: 258,
    },
    {
        x: 288,
        y: 261,
    },
    {
        x: 288,
        y: 264,
    },
    {
        x: 288,
        y: 267,
    },
    {
        x: 287,
        y: 270,
    },
    {
        x: 286,
        y: 272,
    },
    {
        x: 286,
        y: 275,
    },
    {
        x: 285,
        y: 276,
    },
    {
        x: 284,
        y: 277,
    },
    {
        x: 284,
        y: 278,
    },
    {
        x: 283,
        y: 279,
    },
    {
        x: 282,
        y: 279,
    },
    {
        x: 281,
        y: 280,
    },
    {
        x: 280,
        y: 281,
    },
    {
        x: 279,
        y: 281,
    },
    {
        x: 276,
        y: 282,
    },
    {
        x: 272,
        y: 283,
    },
    {
        x: 266,
        y: 283,
    },
    {
        x: 258,
        y: 284,
    },
    {
        x: 251,
        y: 285,
    },
    {
        x: 244,
        y: 287,
    },
    {
        x: 237,
        y: 287,
    },
    {
        x: 232,
        y: 288,
    },
    {
        x: 231,
        y: 289,
    },
    {
        x: 228,
        y: 290,
    },
    {
        x: 226,
        y: 291,
    },
    {
        x: 225,
        y: 291,
    },
    {
        x: 224,
        y: 291,
    },
    {
        x: 224,
        y: 292,
    },
    {
        x: 224,
        y: 295,
    },
    {
        x: 220,
        y: 301,
    },
    {
        x: 215,
        y: 307,
    },
    {
        x: 212,
        y: 311,
    },
    {
        x: 212,
        y: 313,
    },
    {
        x: 212,
        y: 315,
    },
    {
        x: 212,
        y: 318,
    },
    {
        x: 212,
        y: 320,
    },
    {
        x: 212,
        y: 322,
    },
    {
        x: 211,
        y: 324,
    },
    {
        x: 210,
        y: 327,
    },
    {
        x: 208,
        y: 330,
    },
    {
        x: 208,
        y: 331,
    },
    {
        x: 206,
        y: 335,
    },
    {
        x: 205,
        y: 337,
    },
    {
        x: 204,
        y: 339,
    },
    {
        x: 204,
        y: 342,
    },
    {
        x: 204,
        y: 343,
    },
    {
        x: 204,
        y: 345,
    },
    {
        x: 203,
        y: 346,
    },
    {
        x: 204,
        y: 346,
    },
    {
        x: 221,
        y: 346,
    },
    {
        x: 231,
        y: 345,
    },
    {
        x: 242,
        y: 345,
    },
    {
        x: 256,
        y: 343,
    },
    {
        x: 269,
        y: 343,
    },
    {
        x: 282,
        y: 343,
    },
    {
        x: 296,
        y: 343,
    },
    {
        x: 312,
        y: 343,
    },
    {
        x: 326,
        y: 343,
    },
    {
        x: 340,
        y: 340,
    },
    {
        x: 352,
        y: 340,
    },
    {
        x: 364,
        y: 339,
    },
    {
        x: 376,
        y: 338,
    },
    {
        x: 388,
        y: 337,
    },
    {
        x: 398,
        y: 337,
    },
    {
        x: 398,
        y: 337,
    },
    {
        x: 409,
        y: 336,
    },
    {
        x: 418,
        y: 335,
    },
    {
        x: 429,
        y: 334,
    },
    {
        x: 440,
        y: 334,
    },
    {
        x: 449,
        y: 334,
    },
    {
        x: 457,
        y: 334,
    },
    {
        x: 465,
        y: 333,
    },
    {
        x: 472,
        y: 332,
    },
    {
        x: 479,
        y: 332,
    },
    {
        x: 487,
        y: 331,
    },
    {
        x: 496,
        y: 331,
    },
    {
        x: 508,
        y: 330,
    },
    {
        x: 520,
        y: 329,
    },
    {
        x: 530,
        y: 327,
    },
    {
        x: 540,
        y: 327,
    },
    {
        x: 550,
        y: 327,
    },
    {
        x: 560,
        y: 327,
    },
    {
        x: 570,
        y: 327,
    },
    {
        x: 580,
        y: 327,
    },
    {
        x: 590,
        y: 327,
    },
    {
        x: 600,
        y: 327,
    },
    {
        x: 612,
        y: 327,
    },
    {
        x: 622,
        y: 326,
    },
    {
        x: 632,
        y: 326,
    },
    {
        x: 644,
        y: 324,
    },
    {
        x: 652,
        y: 323,
    },
    {
        x: 664,
        y: 323,
    },
    {
        x: 674,
        y: 323,
    },
    {
        x: 686,
        y: 323,
    },
    {
        x: 697,
        y: 321,
    },
    {
        x: 708,
        y: 320,
    },
    {
        x: 720,
        y: 319,
    },
    {
        x: 731,
        y: 319,
    },
    {
        x: 741,
        y: 318,
    },
    {
        x: 752,
        y: 317,
    },
    {
        x: 763,
        y: 316,
    },
    {
        x: 773,
        y: 316,
    },
    {
        x: 781,
        y: 315,
    },
    {
        x: 791,
        y: 314,
    },
    {
        x: 800,
        y: 314,
    },
    {
        x: 810,
        y: 313,
    },
    {
        x: 818,
        y: 313,
    },
    {
        x: 824,
        y: 313,
    },
    {
        x: 832,
        y: 313,
    },
    {
        x: 839,
        y: 313,
    },
    {
        x: 844,
        y: 313,
    },
    {
        x: 852,
        y: 313,
    },
    {
        x: 858,
        y: 313,
    },
    {
        x: 864,
        y: 313,
    },
    {
        x: 872,
        y: 313,
    },
    {
        x: 878,
        y: 313,
    },
    {
        x: 885,
        y: 313,
    },
    {
        x: 890,
        y: 313,
    },
    {
        x: 896,
        y: 313,
    },
    {
        x: 900,
        y: 313,
    },
    {
        x: 902,
        y: 313,
    },
    {
        x: 905,
        y: 313,
    },
    {
        x: 908,
        y: 313,
    },
    {
        x: 911,
        y: 313,
    },
    {
        x: 915,
        y: 313,
    },
    {
        x: 918,
        y: 313,
    },
    {
        x: 921,
        y: 313,
    },
    {
        x: 921,
        y: 313,
    },
    {
        x: 925,
        y: 313,
    },
    {
        x: 929,
        y: 313,
    },
    {
        x: 935,
        y: 313,
    },
    {
        x: 940,
        y: 313,
    },
    {
        x: 944,
        y: 313,
    },
    {
        x: 947,
        y: 313,
    },
    {
        x: 951,
        y: 313,
    },
    {
        x: 953,
        y: 313,
    },
    {
        x: 957,
        y: 312,
    },
    {
        x: 960,
        y: 312,
    },
    {
        x: 964,
        y: 312,
    },
    {
        x: 968,
        y: 312,
    },
    {
        x: 972,
        y: 312,
    },
    {
        x: 976,
        y: 312,
    },
    {
        x: 981,
        y: 311,
    },
    {
        x: 986,
        y: 311,
    },
    {
        x: 991,
        y: 311,
    },
    {
        x: 994,
        y: 310,
    },
    {
        x: 996,
        y: 310,
    },
    {
        x: 1000,
        y: 310,
    },
    {
        x: 996,
        y: 303,
    },
    {
        x: 985,
        y: 306,
    },
    {
        x: 976,
        y: 308,
    },
    {
        x: 965,
        y: 310,
    },
    {
        x: 954,
        y: 312,
    },
    {
        x: 946,
        y: 315,
    },
    {
        x: 939,
        y: 315,
    },
    {
        x: 935,
        y: 317,
    },
    {
        x: 932,
        y: 317,
    },
    {
        x: 931,
        y: 318,
    },
    {
        x: 931,
        y: 319,
    },
    {
        x: 932,
        y: 319,
    },
    {
        x: 933,
        y: 319,
    },
    {
        x: 934,
        y: 319,
    },
    {
        x: 935,
        y: 319,
    },
    {
        x: 936,
        y: 319,
    },
    {
        x: 937,
        y: 319,
    },
    {
        x: 938,
        y: 320,
    },
    {
        x: 939,
        y: 320,
    },
    {
        x: 940,
        y: 320,
    },
    {
        x: 940,
        y: 319,
    },
    {
        x: 940,
        y: 318,
    },
    {
        x: 940,
        y: 317,
    },
    {
        x: 940,
        y: 316,
    },
    {
        x: 940,
        y: 315,
    },
    {
        x: 940,
        y: 314,
    },
    {
        x: 940,
        y: 311,
    },
    {
        x: 940,
        y: 309,
    },
    {
        x: 940,
        y: 307,
    },
    {
        x: 940,
        y: 305,
    },
    {
        x: 940,
        y: 303,
    },
    {
        x: 940,
        y: 300,
    },
    {
        x: 940,
        y: 297,
    },
    {
        x: 940,
        y: 294,
    },
    {
        x: 940,
        y: 291,
    },
    {
        x: 940,
        y: 288,
    },
    {
        x: 940,
        y: 286,
    },
    {
        x: 940,
        y: 283,
    },
    {
        x: 940,
        y: 281,
    },
    {
        x: 940,
        y: 280,
    },
    {
        x: 940,
        y: 279,
    },
    {
        x: 940,
        y: 276,
    },
    {
        x: 940,
        y: 275,
    },
    {
        x: 940,
        y: 272,
    },
    {
        x: 940,
        y: 270,
    },
    {
        x: 940,
        y: 269,
    },
    {
        x: 939,
        y: 268,
    },
    {
        x: 939,
        y: 267,
    },
    {
        x: 938,
        y: 267,
    },
    {
        x: 939,
        y: 267,
    },
    {
        x: 940,
        y: 267,
    },
    {
        x: 942,
        y: 267,
    },
    {
        x: 943,
        y: 267,
    },
    {
        x: 944,
        y: 267,
    },
    {
        x: 947,
        y: 268,
    },
    {
        x: 949,
        y: 268,
    },
    {
        x: 952,
        y: 270,
    },
    {
        x: 955,
        y: 271,
    },
    {
        x: 957,
        y: 273,
    },
    {
        x: 960,
        y: 274,
    },
    {
        x: 960,
        y: 275,
    },
    {
        x: 961,
        y: 275,
    },
    {
        x: 961,
        y: 276,
    },
    {
        x: 961,
        y: 278,
    },
    {
        x: 961,
        y: 280,
    },
    {
        x: 961,
        y: 283,
    },
    {
        x: 960,
        y: 287,
    },
    {
        x: 959,
        y: 291,
    },
    {
        x: 956,
        y: 294,
    },
    {
        x: 952,
        y: 299,
    },
    {
        x: 947,
        y: 303,
    },
    {
        x: 941,
        y: 308,
    },
    {
        x: 936,
        y: 312,
    },
    {
        x: 930,
        y: 315,
    },
    {
        x: 925,
        y: 315,
    },
    {
        x: 921,
        y: 316,
    },
    {
        x: 918,
        y: 316,
    },
    {
        x: 916,
        y: 316,
    },
    {
        x: 914,
        y: 316,
    },
    {
        x: 912,
        y: 316,
    },
    {
        x: 912,
        y: 315,
    },
    {
        x: 910,
        y: 314,
    },
    {
        x: 910,
        y: 311,
    },
    {
        x: 909,
        y: 308,
    },
    {
        x: 908,
        y: 305,
    },
    {
        x: 908,
        y: 301,
    },
    {
        x: 906,
        y: 296,
    },
    {
        x: 906,
        y: 290,
    },
    {
        x: 906,
        y: 284,
    },
    {
        x: 906,
        y: 278,
    },
    {
        x: 907,
        y: 272,
    },
    {
        x: 909,
        y: 266,
    },
    {
        x: 913,
        y: 260,
    },
    {
        x: 918,
        y: 255,
    },
    {
        x: 922,
        y: 254,
    },
    {
        x: 925,
        y: 251,
    },
    {
        x: 929,
        y: 251,
    },
    {
        x: 932,
        y: 251,
    },
    {
        x: 935,
        y: 251,
    },
    {
        x: 937,
        y: 251,
    },
    {
        x: 940,
        y: 251,
    },
    {
        x: 944,
        y: 255,
    },
    {
        x: 948,
        y: 258,
    },
    {
        x: 951,
        y: 260,
    },
    {
        x: 954,
        y: 265,
    },
    {
        x: 956,
        y: 268,
    },
    {
        x: 956,
        y: 271,
    },
    {
        x: 956,
        y: 275,
    },
    {
        x: 956,
        y: 277,
    },
    {
        x: 953,
        y: 279,
    },
    {
        x: 948,
        y: 282,
    },
    {
        x: 944,
        y: 283,
    },
    {
        x: 937,
        y: 286,
    },
    {
        x: 930,
        y: 287,
    },
    {
        x: 922,
        y: 287,
    },
    {
        x: 916,
        y: 287,
    },
    {
        x: 908,
        y: 287,
    },
    {
        x: 904,
        y: 286,
    },
    {
        x: 901,
        y: 285,
    },
    {
        x: 899,
        y: 283,
    },
    {
        x: 897,
        y: 279,
    },
    {
        x: 896,
        y: 275,
    },
    {
        x: 896,
        y: 269,
    },
    {
        x: 896,
        y: 263,
    },
    {
        x: 896,
        y: 258,
    },
    {
        x: 898,
        y: 250,
    },
    {
        x: 900,
        y: 244,
    },
    {
        x: 903,
        y: 238,
    },
    {
        x: 905,
        y: 235,
    },
    {
        x: 908,
        y: 232,
    },
    {
        x: 911,
        y: 231,
    },
    {
        x: 914,
        y: 230,
    },
    {
        x: 917,
        y: 230,
    },
    {
        x: 920,
        y: 230,
    },
    {
        x: 923,
        y: 230,
    },
    {
        x: 925,
        y: 231,
    },
    {
        x: 928,
        y: 232,
    },
    {
        x: 931,
        y: 234,
    },
    {
        x: 932,
        y: 234,
    },
    {
        x: 934,
        y: 235,
    },
    {
        x: 935,
        y: 235,
    },
    {
        x: 935,
        y: 234,
    },
    {
        x: 935,
        y: 230,
    },
    {
        x: 937,
        y: 224,
    },
    {
        x: 939,
        y: 216,
    },
    {
        x: 942,
        y: 209,
    },
    {
        x: 947,
        y: 200,
    },
    {
        x: 949,
        y: 191,
    },
    {
        x: 952,
        y: 183,
    },
    {
        x: 956,
        y: 175,
    },
    {
        x: 959,
        y: 168,
    },
    {
        x: 962,
        y: 161,
    },
    {
        x: 965,
        y: 154,
    },
    {
        x: 967,
        y: 147,
    },
    {
        x: 968,
        y: 139,
    },
    {
        x: 969,
        y: 135,
    },
    {
        x: 970,
        y: 132,
    },
    {
        x: 970,
        y: 131,
    },
    {
        x: 970,
        y: 130,
    },
    {
        x: 969,
        y: 130,
    },
];

const images = [
    "https://cdn1.epicgames.com/min/offer/2560x1440-2560x1440-5e710b93049cbd2125cf0261dcfbf943.jpg",
    "https://cdn1.epicgames.com/offer/22600f09e936468c8ecfc22b5eac7d7c/EGST_StoreLandscape_2560x1440_2560x1440-d49d4862a0e1a243638d5f95517ed205",
    "https://bloody-disgusting.com/wp-content/uploads/2018/12/hades-preview-header.png",
    "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2vdIrNkwP2H2Ot8rlRDkxa/569d8c6770743ee56d3c966862d96d40/Combat-Forest-Warriors-_Autumnal-forest_1920x1080.jpg",
];

const Canvas2DOn3js = () => {
    const [context, setContext] = useState(null);
    const [textureImageIndex, setTextureImageIndex] = useState(0);
    const canvasRef = useRef(null);

    function drawStroke() {
        context.beginPath();
        context.moveTo(testLine[0].x, testLine[0].y);

        testLine.forEach((point) => {
            context.lineTo(point.x, point.y);
        });

        context.strokeStyle = "#000000";
        context.lineWidth = 2;
        context.stroke();
    }

    useEffect(() => {
        if (canvasRef && canvasRef?.current) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;

            setContext(canvasRef?.current?.getContext("2d"));
        }
    }, [canvasRef]);

    useEffect(() => {
        if (context && canvasRef?.current) {
            context.fillStyle = "white";
            context.fillRect(
                0,
                0,
                canvasRef?.current?.width,
                canvasRef?.current?.height
            );

            drawStroke();
        }
    }, [context, canvasRef]);

    useEffect(() => {
        // ! Make texture from 2D Canvas
        // const texture = new THREE.Texture(canvasRef?.current);
        // texture.needsUpdate = true;

        // ! Make texture from image
        const loader = new THREE.TextureLoader();
        const texture = loader.load(images[textureImageIndex], () => {
            renderer.render(scene, camera);
        });

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z = 96;

        const canvas = document.querySelector("#main_canvas");
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // ! Adding Ambient Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        scene.add(ambientLight);

        // ! Adding Spot Light
        const spotLight = new THREE.SpotLight(0xffffff, 1);
        spotLight.castShadow = true;
        spotLight.position.set(0, 64, 32);
        scene.add(spotLight);

        // ! Adding Cube
        const boxGeometry = new THREE.BoxGeometry(80, 50, 1);
        const boxMaterial = new THREE.MeshBasicMaterial({ map: texture });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        scene.add(boxMesh);

        // ! Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);

        // ! Add FPS stats
        const stats = Stats();
        document.body.appendChild(stats.dom);

        const animate = () => {
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        };
        animate();
    }, [textureImageIndex]);

    return (
        <div>
            <canvas id="main_canvas" />
            <canvas ref={canvasRef}></canvas>
            <button
                onClick={() =>
                    setTextureImageIndex(
                        (textureImageIndex) =>
                            (textureImageIndex + 1) % images?.length
                    )
                }
            >
                Next
            </button>
        </div>
    );
};

export default Canvas2DOn3js;

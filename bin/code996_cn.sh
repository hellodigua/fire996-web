#!/usr/bin/env bash

Help()
{
   # Display Help
   echo "Hey please give me three param like this!"
   echo
   echo "Syntax: bash $0 [2021-01-01] [2022-04-04] [author]"
   echo "示例: bash code996.sh 2021-01-01 2022-12-31 digua"
   echo "options:"
   echo "1st param     Calculate from time."
   echo "2nd param     Calculate to time."
   echo "3rd param     Calculate by committer."
   echo
   echo "You can be inspired by 'git log --help' to get more detail."
}

OS_DETECT()
{
   # Detect OS
    case "$(uname -s)" in

    Linux)
        # echo 'Linux'
        open_url="xdg-open"
        ;;

    Darwin)
        # echo 'macOS'
        open_url="open"
        ;;

    CYGWIN*|MINGW32*|MSYS*|MINGW*)
        # echo 'Windows'
        open_url="start"
        ;;

    *)
        echo 'Other OS'
        echo "trying to use xdg-open to open the url"
        open_url="xdg-open"
        ;;
    esac

}
OS_DETECT


time_start=$1


if [ "$1" == "--help" ]
    then
        Help
        exit 0
elif [ "$1" == "-h" ]
    then
        Help
        exit 0
fi

if [ -z $1 ]
    then
        time_start="2021-01-01"
fi

time_end=$2
if [ -z $2 ]
    then
        time_end=$(date "+%Y-%m-%d")
fi

author=$3
if [ -z $3 ]
    then
        author=""
fi


by_day_output=`git -C $PWD log --author=$author --date=format:%u --after="$time_start" --before="$time_end" |grep "Date:"|awk '{print $2}'|sort|uniq -c`

by_hour_output=`git -C $PWD log --author=$author --date=format:%H --after="$time_start" --before="$time_end" |grep "Date:"|awk '{print $2}'|sort|uniq -c`

for i in "${by_day_output[@]}"
    do
        by_day_result=`echo "$i"|sed -E 's/^ +//g'|sed 's/ /_/g'|tr '\n' ','`

    done


# should modify by day format %a or %A
# day_sorted=('Monday' 'Tuesday' 'Wednesday' 'Thursday' 'Friday' 'Saturday' 'Sunday')
# day_sorted=('Mon' 'Tue' 'Wed' 'Thu' 'Fri' 'Sat' 'Sun')

RED='\033[1;91m'
NC='\033[0m' # No Color

echo -e "统计时间范围：$time_start 至 $time_end"

for i in "${by_day_output[@]}"
    do
        echo
        # echo -e "${RED}By Day:"
        echo -e "${RED}一周七天 commit 分布"
        echo -e "  总提交次数 星期\n$i"|column -t
        by_day_result=`echo "$i"|sed -E 's/^ +//g'|sed "s/ /_/g"|tr '\n' ','`
    done


for i in "${by_hour_output[@]}"
    do
        echo
        echo -e "${RED}24小时 commit 分布"
        echo -e "  总提交次数 小时\n$i"|column -t
        by_hour_result=`echo "$i"|sed -E 's/^ +//g'|sed "s/ /_/g"|tr '\n' ','`
    done


by_day_result=`echo "$by_day_result"|sed -E 's/,$//g'`

by_hour_result=`echo "$by_hour_result"|sed -E 's/,$//g'`


result=$time_start"_"$time_end"&week="$by_day_result"&hour="$by_hour_result

# url
github_url="https://hellodigua.github.io/code996/#/result?time=$result"
vercel_url="https://code996.vercel.app/#/result?time=$result"
gitee_url="https://hellodigua.gitee.io/code996/#/result?time=$result"

echo
echo -e "${NC}复制以下url以查看可视化分析结果："
echo -e "${RED}$github_url"
echo -e "${NC}"
echo -e "${NC}若github访问过慢，也可以访问以下镜像链接："
echo -e "${NC}vercel节点："
echo -e "${RED}$vercel_url"
echo -e "${NC}"
echo -e "${NC}gitee节点："
echo -e "${RED}$gitee_url"

$open_url "$github_url"

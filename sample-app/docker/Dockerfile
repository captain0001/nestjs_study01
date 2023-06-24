# 軽量な Alpine Linux をベースにする
FROM alpine

# ログインしたときに便利なように bash・ps・curl を入れておく。
RUN apk add bash procps curl

# 1秒ごとに時刻を STDERR に書き出す
CMD sh -c "(while :; do date; sleep 1; done) >&2"

var Item = function(img, width, height) {
    var self = {};

    self.friction = 0.1;

    self.img = img;
    self.x = 0;
    self.y = 0;
    self.px = 0;
    self.py = 0;
    self.speedX = 0;
    self.speedY = 0;
    self.width = width;
    self.height = height;

    self.draw = function(context) {
        context.drawImage(self.img, self.x, self.y, self.width, self.height);
    }

    Item.list.push(self);
    return self;
}

var Entity = function(img, width, height, maxSpeed, accel) {
    var self = {};

    self.friction = 0.1;

    self.img = img;
    self.x = 0;
    self.y = 0;
    self.px = 0;
    self.py = 0;
    self.speedX = 0;
    self.speedY = 0;
    self.width = width;
    self.height = height;
    self.maxSpeed = maxSpeed;
    self.accel = accel;

    self.draw = function(context) {
        context.drawImage(self.img, self.x, self.y, self.width, self.height);
    }

    self.move = function(angle) {
        if (Math.abs(self.speedX) < self.maxSpeed) {
            self.speedX += Math.cos(angle * Math.PI / 180) * self.accel;
        }
        if (Math.abs(self.speedY) < self.maxSpeed) {
            self.speedY += Math.sin(angle * Math.PI / 180) * self.accel;
            // console.log(self.speedX);
            // console.log(self.speedY);
        }
    }

    self.update = function() {
        self.px = self.x;
        self.py = self.y;
        self.x += self.speedX;
        self.y += self.speedY;
        self.speedX *= (1 - self.friction);
        self.speedY *= (1 - self.friction);

        if (self.x < 0 || self.x > canvas.width - self.width || self.y < 0 || self.y > canvas.height - self.height) {
            self.x = self.px;
            self.y = self.py;
            self.speedX = self.speedY = 0;
        }
        for (var i = 0; i < Entity.list.length; i++) {
            var e = Entity.list[i];
            var t = Item.list[i];
            if ((hitTestCircle(self, e, 100)) && self != e) {
                self.move(Math.atan2(self.y - e.y, self.x - e.x) * 180 / Math.PI);
            }
        }
    }

    Entity.list.push(self);
    return self;

}

Entity.list = [];
Item.list = [];
